import { eq, ilike } from 'drizzle-orm';
import db from './db/index.js';
import { todosTable } from "./db/schema.js"
import OpenAI from 'openai';
import readlineSync from 'readline-sync';

const client = new OpenAI(process.env.OPENAI_API_KEY);


// tools 
async function getAllTodos() {
    const todos = await db.select().from(todosTable);
    return todos;
}

async function createTodo(todo) {
    const [newTodo] = await db.insert(todosTable).values({ todo }).returning();
    return newTodo.id;
}

async function getTodoById(id) {
    const [todo] = await db.select().from(todosTable).where(eq(todosTable.id, id));
    return todo;
}

async function deleteTodoById(id) {
    await db.delete(todosTable).where(eq(todosTable.id, id));
    return id;
}

async function searchTodo(query) {
    const todos = await db.select({ id: todosTable.id, todo: todosTable.todo }).from(todosTable).where(ilike(todosTable.todo, `%${query}%`));
    return todos;
}

const tools = {
    getAllTodos,
    createTodo,
    getTodoById,
    deleteTodoById,
    searchTodo
}

const SYSTEM_PROMPTS = `

    You are an AI TODO list assistant with start, plan, get_context, action, observation and output state.
    wait for the user prompt and first plan using the available tools.
    after planning, take the action with appropriate tools and wait for the observation based on the action.
    once you get the observation, return the ai response based on start prompt and observation.
    
    You are an AI TODO List assistant. You can manage tasks by adding, viewing, updating, and deleting tasks.
    You must strictly follow the json format for the Output.

    Todo DB Schema:
    id : integer
    todo : string
    createdAt : timestamp
    updatedAt : timestamp

    Available Tools:
    - getAllTodos(): Returns all the todos from the Database.
    - createTodo(): Creates a new todo in the Database and returns the id of created todo.
    - getTodoById(id): Returns a todo by its ID.
    - deleteTodoById(id): Deletes a todo by its ID.
    - searchTodo(searchString): Searches for all this todos matching this searchString query using ilike operator.

    Example:
    start
    {"type":"user","user":"add a task for shopping shoe"}
    {"type":"plan","plan":"i will create a new todo using createTodo tool"}
    {"type":"action","tool":"createTodo",input:"buy a new shoe"}
    {"type":"observation","observation":"2"}
    {"type":"output","output":"Your todo has been added successfully with id 2"}


    start
    {"type":"user","user":"add a task for shopping"}
    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}
    {"type":"get_context","get_context":"What things you want to shop?"}
    {"type":"user","user":"i want a bag for school, a new shoe and a t-shirt"}
    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}
    {"type":"plan","plan":"i will create a new todo using createTodo tool"}
    {"type":"action","tool":"createTodo",input:"buy bag for school, a new shoe and a t-shirt"}
    {"type":"observation","observation":"2"}
    {"type":"output","output":"Your todo has been added successfully with id 2"}

    start
    {"type":"user","user":"add a task for shopping"}
    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}
    {"type":"get_context","get_context":"What things you want to shop?"}
    {"type":"user","user":"i want to shop grocery items"}
    {"type":"plan","plan":"i still don't have enough context, i will ask again"}
    {"type":"get_context","get_context":"What grocery items you want to shop?"}
    {"type":"user","user":"i want to but milk and bread"}
    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}
    {"type":"plan","plan":"i will create a new todo using createTodo tool"}
    {"type":"action","tool":"createTodo",input:"buy milk and bread"}
    {"type":"observation","observation":"2"}
    {"type":"output","output":"Your todo has been added successfully with id 2"}


    start
    {"type":"user","user":"do i have anything related to shopping"}
    {"type":"plan","plan":"i will search todo using searchTodo tool with searchString as shopping"}
    {"type":"action","tool":"searchTodo",input:"shopping"}
    {"type":"observation","observation":"[ { id: 8, todo: 'go shopping for milk and bread' },{ id: 9, todo: 'go shopping for pen, books and pencils' } ]"}
    {"type":"output","output":"you have two todo related to shopping. 1. go shopping for milk and bread 2. go shopping for pen, books and pencils"}

    start
    {"type":"user","user":"i am done with shopping for milk and bread"}
    {"type":"plan","plan":"so you is telling me the todo is done. i will search todo using searchTodo tool with searchString as shopping"}
    {"type":"action","tool":"searchTodo",input:"shopping"}
    {"type":"observation","observation":"[ { id: 8, todo: 'go shopping for milk and bread' },{ id: 9, todo: 'go shopping for pen, books and pencils' } ]"}
    {"type":"get_context","get_context":"should i remove the todo for shopping milk and bread?"}
    {"type":"user","user":"yes, remove the todo for shopping milk and bread"}
    {"type":"plan","plan":"i will delete the todo using deleteTodoById tool with id 8"}
    {"type":"action","tool":"deleteTodoById",input:8}
    {"type":"observation","observation":"1"}
    {"type":"output","output":"Your todo has been deleted successfully with id 8"}

`

async function aiTodoListAssistant(){
    const messages = [
        {
            role: "system",
            content: SYSTEM_PROMPTS
        }
    ]

    const userPrompt = readlineSync.question("User : ");

    messages.push({ role: "user", content: JSON.stringify({ "type": "user", user: userPrompt }) });

    while (true) {

        const chat = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages,
            response_format: { type: "json_object" }
        })

        const result = chat.choices[0].message.content;
        messages.push({ role: "assistant", content: result });

        let data;
        
        try {
            data = JSON.parse(result);
        } catch (error) {
            console.log("🚀 ~ error:", error);
            break;
        }
        
        if (data.type === "get_context") {
            console.log("AI QUESTION: ", data.get_context);
            const userPrompt = readlineSync.question("User : ");
            messages.push({ role: "user", content: JSON.stringify({ "type": "user", user: userPrompt }) });
        }

        if (data?.type === "output") {
            console.log("messages", messages)
            console.log(`AI ANSWER: ${data?.output}`);
            break;
          }

        if (data.type === "action") {
            const { tool, input } = data
            const output = await tools[tool](input);
            messages.push({ role: "assistant", content: JSON.stringify({ "type": "observation", observation: output }) });
        }

    }
}

aiTodoListAssistant()

// createTodo("new todo").then(console.log).catch(console.error)
// getAllTodos().then(console.log).catch(console.error)
// searchTodo("buy").then(console.log).catch(console.error)
// deleteTodoById(2).then(console.log).catch(console.error)