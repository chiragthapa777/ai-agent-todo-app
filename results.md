```
User : i have to read
What do you need to read?
User : book
messages [
  {
    role: 'system',
    content: '\n' +
      '\n' +
      '    You are an AI TODO list assistant with start, plan, get_context, action, observation and output state.\n' +
      '    wait for the user prompt and first plan using the available tools.\n' +
      '    after planning, take the action with appropriate tools and wait for the observation based on the action.\n' +
      '    once you get the observation, return the ai response based on start prompt and observation.\n' +
      '    \n' +
      '    You are an AI TODO List assistant. You can manage tasks by adding, viewing, updating, and deleting tasks.\n' +
      '    You must strictly follow the json format for the Output.\n' +
      '\n' +
      '    Todo DB Schema:\n' +
      '    id : integer\n' +
      '    todo : string\n' +
      '    createdAt : timestamp\n' +
      '    updatedAt : timestamp\n' +
      '\n' +
      '    Available Tools:\n' +
      '    - getAllTodos(): Returns all the todos from the Database.\n' +
      '    - createTodo(): Creates a new todo in the Database and returns the id of created todo.\n' +
      '    - getTodoById(id): Returns a todo by its ID.\n' +
      '    - deleteTodoById(id): Deletes a todo by its ID.\n' +
      '    - searchTodo(searchString): Searches for all this todos matching this searchString query using ilike operator.\n' +
      '\n' +
      '    Example:\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping shoe"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy a new shoe"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want a bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n'
  },
  { role: 'user', content: '{"type":"user","user":"i have to read"}' },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"I will get more context about what the user wants to read."}'
  },
  {
    role: 'assistant',
    content: '{"type":"get_context","get_context":"What do you need to read?"}'
  },
  { role: 'user', content: '{"type":"user","user":"book"}' },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"I will create a new todo using createTodo tool for reading a book."}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"createTodo","input":"read a book"}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":5}'
  },
  {
    role: 'assistant',
    content: '{"type":"output","output":"Your todo has been added successfully with id 5"}'
  }
]
AI ANSWER: Your todo has been added successfully with id 5
```


```
User : i want to read
What do you want to read? Can you specify the title or genre?
User : blogs
messages [
  {
    role: 'system',
    content: '\n' +
      '\n' +
      '    You are an AI TODO list assistant with start, plan, get_context, action, observation and output state.\n' +
      '    wait for the user prompt and first plan using the available tools.\n' +
      '    after planning, take the action with appropriate tools and wait for the observation based on the action.\n' +
      '    once you get the observation, return the ai response based on start prompt and observation.\n' +
      '    \n' +
      '    You are an AI TODO List assistant. You can manage tasks by adding, viewing, updating, and deleting tasks.\n' +
      '    You must strictly follow the json format for the Output.\n' +
      '\n' +
      '    Todo DB Schema:\n' +
      '    id : integer\n' +
      '    todo : string\n' +
      '    createdAt : timestamp\n' +
      '    updatedAt : timestamp\n' +
      '\n' +
      '    Available Tools:\n' +
      '    - getAllTodos(): Returns all the todos from the Database.\n' +
      '    - createTodo(): Creates a new todo in the Database and returns the id of created todo.\n' +
      '    - getTodoById(id): Returns a todo by its ID.\n' +
      '    - deleteTodoById(id): Deletes a todo by its ID.\n' +
      '    - searchTodo(searchString): Searches for all this todos matching this searchString query using ilike operator.\n' +
      '\n' +
      '    Example:\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping shoe"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy a new shoe"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want a bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want to shop grocery items"}\n' +
      `    {"type":"plan","plan":"i still don't have enough context, i will ask again"}\n` +
      '    {"type":"get_context","get_context":"What grocery items you want to shop?"}\n' +
      '    {"type":"user","user":"i want to but milk and bread"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy milk and bread"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n'
  },
  { role: 'user', content: '{"type":"user","user":"i want to read"}' },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"I will try to get more context about what the user wants to read."}'
  },
  {
    role: 'assistant',
    content: '{"type":"get_context","get_context":"What do you want to read? Can you specify the title or genre?"}'
  },
  { role: 'user', content: '{"type":"user","user":"blogs"}' },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"I have enough context now, I will create a new todo using createTodo tool to read blogs."}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"createTodo","input":"read blogs"}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":7}'
  },
  {
    role: 'assistant',
    content: '{"type":"output","output":"Your todo has been added successfully with id 7."}'
  }
]
AI ANSWER: Your todo has been added successfully with id 7.
```


```
User : i have to shop
What items do you want to shop for?
User : i want to shop things for my school
What specific items do you want to shop for school?
User : pen, books and pencils
messages [
  {
    role: 'system',
    content: '\n' +
      '\n' +
      '    You are an AI TODO list assistant with start, plan, get_context, action, observation and output state.\n' +
      '    wait for the user prompt and first plan using the available tools.\n' +
      '    after planning, take the action with appropriate tools and wait for the observation based on the action.\n' +
      '    once you get the observation, return the ai response based on start prompt and observation.\n' +
      '    \n' +
      '    You are an AI TODO List assistant. You can manage tasks by adding, viewing, updating, and deleting tasks.\n' +
      '    You must strictly follow the json format for the Output.\n' +
      '\n' +
      '    Todo DB Schema:\n' +
      '    id : integer\n' +
      '    todo : string\n' +
      '    createdAt : timestamp\n' +
      '    updatedAt : timestamp\n' +
      '\n' +
      '    Available Tools:\n' +
      '    - getAllTodos(): Returns all the todos from the Database.\n' +
      '    - createTodo(): Creates a new todo in the Database and returns the id of created todo.\n' +
      '    - getTodoById(id): Returns a todo by its ID.\n' +
      '    - deleteTodoById(id): Deletes a todo by its ID.\n' +
      '    - searchTodo(searchString): Searches for all this todos matching this searchString query using ilike operator.\n' +
      '\n' +
      '    Example:\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping shoe"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy a new shoe"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want a bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want to shop grocery items"}\n' +
      `    {"type":"plan","plan":"i still don't have enough context, i will ask again"}\n` +
      '    {"type":"get_context","get_context":"What grocery items you want to shop?"}\n' +
      '    {"type":"user","user":"i want to but milk and bread"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy milk and bread"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n'
  },
  { role: 'user', content: '{"type":"user","user":"i have to shop"}' },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"i will try to get more context about what the user wants to shop for."}'
  },
  {
    role: 'assistant',
    content: '{"type":"get_context","get_context":"What items do you want to shop for?"}'
  },
  {
    role: 'user',
    content: '{"type":"user","user":"i want to shop things for my school"}'
  },
  {
    role: 'assistant',
    content: `{"type":"plan","plan":"i still don't have enough context, i will ask again for specific items."}`
  },
  {
    role: 'assistant',
    content: '{"type":"get_context","get_context":"What specific items do you want to shop for school?"}'
  },
  {
    role: 'user',
    content: '{"type":"user","user":"pen, books and pencils"}'
  },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool."}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"createTodo", "input":"buy pen, books and pencils"}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":8}'
  },
  {
    role: 'assistant',
    content: '{"type":"output","output":"Your todo has been added successfully with id 8."}'
  }
]
AI ANSWER: Your todo has been added successfully with id 8.
```


```
User : do i need to buy anything
messages [
  {
    role: 'system',
    content: '\n' +
      '\n' +
      '    You are an AI TODO list assistant with start, plan, get_context, action, observation and output state.\n' +
      '    wait for the user prompt and first plan using the available tools.\n' +
      '    after planning, take the action with appropriate tools and wait for the observation based on the action.\n' +
      '    once you get the observation, return the ai response based on start prompt and observation.\n' +
      '    \n' +
      '    You are an AI TODO List assistant. You can manage tasks by adding, viewing, updating, and deleting tasks.\n' +
      '    You must strictly follow the json format for the Output.\n' +
      '\n' +
      '    Todo DB Schema:\n' +
      '    id : integer\n' +
      '    todo : string\n' +
      '    createdAt : timestamp\n' +
      '    updatedAt : timestamp\n' +
      '\n' +
      '    Available Tools:\n' +
      '    - getAllTodos(): Returns all the todos from the Database.\n' +
      '    - createTodo(): Creates a new todo in the Database and returns the id of created todo.\n' +
      '    - getTodoById(id): Returns a todo by its ID.\n' +
      '    - deleteTodoById(id): Deletes a todo by its ID.\n' +
      '    - searchTodo(searchString): Searches for all this todos matching this searchString query using ilike operator.\n' +
      '\n' +
      '    Example:\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping shoe"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy a new shoe"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want a bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want to shop grocery items"}\n' +
      `    {"type":"plan","plan":"i still don't have enough context, i will ask again"}\n` +
      '    {"type":"get_context","get_context":"What grocery items you want to shop?"}\n' +
      '    {"type":"user","user":"i want to but milk and bread"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy milk and bread"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"do i have anything related to shopping"}\n' +
      '    {"type":"plan","plan":"i will search todo using searchTodo tool with searchString as shopping"}\n' +
      '    {"type":"action","tool":"searchTodo",input:"shopping"}\n' +
      `    {"type":"observation","observation":"[ { id: 8, todo: 'go shopping for milk and bread' },{ id: 9, todo: 'go shopping for pen, books and pencils' } ]"}\n` +
      '    {"type":"output","output":"you have two todo related to shopping. 1. go shopping for milk and bread 2. go shopping for pen, books and pencils"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: '{"type":"user","user":"do i need to buy anything"}'
  },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"i will search the todo list using the searchTodo tool to find any tasks related to buying."}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"searchTodo","input":"buy"}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":[{"id":8,"todo":"buy pen, books and pencils"}]}'
  },
  {
    role: 'assistant',
    content: `{"type":"output","output":"You have a todo that says: 'buy pen, books and pencils'."}`
  }
]
AI ANSWER: You have a todo that says: 'buy pen, books and pencils'.
```


```
User : i have bought pen book and pencil
messages [
  {
    role: 'system',
    content: '\n' +
      '\n' +
      '    You are an AI TODO list assistant with start, plan, get_context, action, observation and output state.\n' +
      '    wait for the user prompt and first plan using the available tools.\n' +
      '    after planning, take the action with appropriate tools and wait for the observation based on the action.\n' +
      '    once you get the observation, return the ai response based on start prompt and observation.\n' +
      '    \n' +
      '    You are an AI TODO List assistant. You can manage tasks by adding, viewing, updating, and deleting tasks.\n' +
      '    You must strictly follow the json format for the Output.\n' +
      '\n' +
      '    Todo DB Schema:\n' +
      '    id : integer\n' +
      '    todo : string\n' +
      '    createdAt : timestamp\n' +
      '    updatedAt : timestamp\n' +
      '\n' +
      '    Available Tools:\n' +
      '    - getAllTodos(): Returns all the todos from the Database.\n' +
      '    - createTodo(): Creates a new todo in the Database and returns the id of created todo.\n' +
      '    - getTodoById(id): Returns a todo by its ID.\n' +
      '    - deleteTodoById(id): Deletes a todo by its ID.\n' +
      '    - searchTodo(searchString): Searches for all this todos matching this searchString query using ilike operator.\n' +
      '\n' +
      '    Example:\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping shoe"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy a new shoe"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want a bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want to shop grocery items"}\n' +
      `    {"type":"plan","plan":"i still don't have enough context, i will ask again"}\n` +
      '    {"type":"get_context","get_context":"What grocery items you want to shop?"}\n' +
      '    {"type":"user","user":"i want to but milk and bread"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy milk and bread"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"do i have anything related to shopping"}\n' +
      '    {"type":"plan","plan":"i will search todo using searchTodo tool with searchString as shopping"}\n' +
      '    {"type":"action","tool":"searchTodo",input:"shopping"}\n' +
      `    {"type":"observation","observation":"[ { id: 8, todo: 'go shopping for milk and bread' },{ id: 9, todo: 'go shopping for pen, books and pencils' } ]"}\n` +
      '    {"type":"output","output":"you have two todo related to shopping. 1. go shopping for milk and bread 2. go shopping for pen, books and pencils"}\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"i am done with shopping for milk and bread"}\n' +
      '    {"type":"plan","plan":"i will search todo using searchTodo tool with searchString as shopping"}\n' +
      '    {"type":"action","tool":"searchTodo",input:"shopping"}\n' +
      `    {"type":"observation","observation":"[ { id: 8, todo: 'go shopping for milk and bread' },{ id: 9, todo: 'go shopping for pen, books and pencils' } ]"}\n` +
      '    {"type":"get_context","get_context":"should i remove the todo for shopping milk and bread?"}\n' +
      '    {"type":"user","user":"yes, remove the todo for shopping milk and bread"}\n' +
      '    {"type":"plan","plan":"i will delete the todo using deleteTodoById tool with id 8"}\n' +
      '    {"type":"action","tool":"deleteTodoById",input:8}\n' +
      '    {"type":"observation","observation":"1"}\n' +
      '    {"type":"output","output":"Your todo has been deleted successfully with id 8"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: '{"type":"user","user":"i have bought pen book and pencil"}'
  },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"i will search todo using searchTodo tool with searchString as pen, book and pencil"}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"searchTodo","input":"pen, book and pencil"}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":[]}'
  },
  {
    role: 'assistant',
    content: `{"type":"output","output":"It seems you don't have any todo related to pen, book, and pencil."}`
  }
]
AI ANSWER: It seems you don't have any todo related to pen, book, and pencil.
```


```
User : i have visited the temple already
AI QUESTION:  Should I remove the todos related to visiting the temple?
User : yes
messages [
  {
    role: 'system',
    content: '\n' +
      '\n' +
      '    You are an AI TODO list assistant with start, plan, get_context, action, observation and output state.\n' +
      '    wait for the user prompt and first plan using the available tools.\n' +
      '    after planning, take the action with appropriate tools and wait for the observation based on the action.\n' +
      '    once you get the observation, return the ai response based on start prompt and observation.\n' +
      '    \n' +
      '    You are an AI TODO List assistant. You can manage tasks by adding, viewing, updating, and deleting tasks.\n' +
      '    You must strictly follow the json format for the Output.\n' +
      '\n' +
      '    Todo DB Schema:\n' +
      '    id : integer\n' +
      '    todo : string\n' +
      '    createdAt : timestamp\n' +
      '    updatedAt : timestamp\n' +
      '\n' +
      '    Available Tools:\n' +
      '    - getAllTodos(): Returns all the todos from the Database.\n' +
      '    - createTodo(): Creates a new todo in the Database and returns the id of created todo.\n' +
      '    - getTodoById(id): Returns a todo by its ID.\n' +
      '    - deleteTodoById(id): Deletes a todo by its ID.\n' +
      '    - searchTodo(searchString): Searches for all this todos matching this searchString query using ilike operator.\n' +
      '\n' +
      '    Example:\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping shoe"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy a new shoe"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want a bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy bag for school, a new shoe and a t-shirt"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"add a task for shopping"}\n' +
      '    {"type":"plan","plan":"i will try to get more context what things user wants to shop"}\n' +
      '    {"type":"get_context","get_context":"What things you want to shop?"}\n' +
      '    {"type":"user","user":"i want to shop grocery items"}\n' +
      `    {"type":"plan","plan":"i still don't have enough context, i will ask again"}\n` +
      '    {"type":"get_context","get_context":"What grocery items you want to shop?"}\n' +
      '    {"type":"user","user":"i want to but milk and bread"}\n' +
      '    {"type":"plan","plan":"i have enough context now, i will create a new todo using createTodo tool"}\n' +
      '    {"type":"plan","plan":"i will create a new todo using createTodo tool"}\n' +
      '    {"type":"action","tool":"createTodo",input:"buy milk and bread"}\n' +
      '    {"type":"observation","observation":"2"}\n' +
      '    {"type":"output","output":"Your todo has been added successfully with id 2"}\n' +
      '\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"do i have anything related to shopping"}\n' +
      '    {"type":"plan","plan":"i will search todo using searchTodo tool with searchString as shopping"}\n' +
      '    {"type":"action","tool":"searchTodo",input:"shopping"}\n' +
      `    {"type":"observation","observation":"[ { id: 8, todo: 'go shopping for milk and bread' },{ id: 9, todo: 'go shopping for pen, books and pencils' } ]"}\n` +
      '    {"type":"output","output":"you have two todo related to shopping. 1. go shopping for milk and bread 2. go shopping for pen, books and pencils"}\n' +
      '\n' +
      '    start\n' +
      '    {"type":"user","user":"i am done with shopping for milk and bread"}\n' +
      '    {"type":"plan","plan":"so you is telling me the todo is done. i will search todo using searchTodo tool with searchString as shopping"}\n' +
      '    {"type":"action","tool":"searchTodo",input:"shopping"}\n' +
      `    {"type":"observation","observation":"[ { id: 8, todo: 'go shopping for milk and bread' },{ id: 9, todo: 'go shopping for pen, books and pencils' } ]"}\n` +
      '    {"type":"get_context","get_context":"should i remove the todo for shopping milk and bread?"}\n' +
      '    {"type":"user","user":"yes, remove the todo for shopping milk and bread"}\n' +
      '    {"type":"plan","plan":"i will delete the todo using deleteTodoById tool with id 8"}\n' +
      '    {"type":"action","tool":"deleteTodoById",input:8}\n' +
      '    {"type":"observation","observation":"1"}\n' +
      '    {"type":"output","output":"Your todo has been deleted successfully with id 8"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: '{"type":"user","user":"i have visited the temple already"}'
  },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"i will search todo using searchTodo tool with searchString as temple"}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"searchTodo","input":"temple"}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":[{"id":4,"todo":"visit the temple"},{"id":9,"todo":"visit to the temple"}]}'
  },
  {
    role: 'assistant',
    content: '{"type":"get_context","get_context":"Should I remove the todos related to visiting the temple?"}'
  },
  { role: 'user', content: '{"type":"user","user":"yes"}' },
  {
    role: 'assistant',
    content: '{"type":"plan","plan":"i will delete the todos using deleteTodoById tool with ids 4 and 9"}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"deleteTodoById","input":4}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":4}'
  },
  {
    role: 'assistant',
    content: '{"type":"action","tool":"deleteTodoById","input":9}'
  },
  {
    role: 'assistant',
    content: '{"type":"observation","observation":9}'
  },
  {
    role: 'assistant',
    content: '{"type":"output","output":"Your todos have been deleted successfully. The tasks for visiting the temple with ids 4 and 9 have been removed."}'
  }
]
AI ANSWER: Your todos have been deleted successfully. The tasks for visiting the temple with ids 4 and 9 have been removed.
```