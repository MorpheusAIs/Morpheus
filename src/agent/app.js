import express from 'express';
import { fileURLToPath, URL } from 'url';
import { promises as fsPromises } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = new URL('.', import.meta.url).pathname;

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript, etc.) from the 'public' directory
app.use(express.static(new URL('public', import.meta.url).pathname));


async function appendToFile(filename, textToAppend) {
  try {
    await fsPromises.appendFile(filename, textToAppend, 'utf8');
    console.log(`Appended text to ${filename}`);
  } catch (err) {
    console.error(`Error appending to ${filename}: ${err}`);
  }
}
async function appendLinesToList(filename, listToAppend) {
  try {
    const fileContent = await fsPromises.readFile(filename, 'utf8');
    const lines = fileContent.split('\n').filter(Boolean); // Split into lines and remove empty lines

    listToAppend.push(...lines); // Append lines to the list

    console.log(`Appended ${lines.length} lines from ${filename} to the list`);
  } catch (err) {
    console.error(`Error reading and appending from ${filename}: ${err}`);
  }
}

import { AgentExecutor, createStructuredChatAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { DynamicStructuredTool } from "@langchain/core/tools";
import {  z } from "zod";

const addtool = new DynamicStructuredTool({
  name: "add",
  description: "adds two numbers together",
  schema: z.object({
    num1: z.number().describe("The first number to add"),
    num2: z.number().describe("The second number to add"),
  }),
  func: async ({ num1, num2 }) =>
    (num1 + num2).toString(), // Outputs still must be strings
});

const subtool = new DynamicStructuredTool({
  name: "subtract",
  description: "subtracts two numbers together",
  schema: z.object({
    num1: z.number().describe("The first number to subtract"),
    num2: z.number().describe("The second number to subtract"),
  }),
  func: async ({ num1, num2 }) =>
    (num1 - num2).toString(), // Outputs still must be strings
});

const multtool = new DynamicStructuredTool({
  name: "multiply",
  description: "multiplies two numbers together",
  schema: z.object({
    num1: z.number().describe("The first number to multiply"),
    num2: z.number().describe("The second number to multiply"),
  }),
  func: async ({ num1, num2 }) =>
    (num1 * num2).toString(), // Outputs still must be strings
});
const divtool = new DynamicStructuredTool({
  name: "divide",
  description: "dividess two numbers",
  schema: z.object({
    num1: z.number().describe("The first number to divide"),
    num2: z.number().describe("The second number to divide"),
  }),
  func: async ({ num1, num2 }) =>
    (num1 / num2).toString(), // Outputs still must be strings
});
const tools = [addtool,subtool,multtool,divtool];

const prompt = ChatPromptTemplate.fromMessages([
    ["system", `
    Respond to the human as helpfully and accurately as possible. You have access to the following tools:
    
    {tools}
    
    Use a JSON blob to specify a tool by providing an action key (tool name) and an action_input key (tool input).
    
    Valid "action" values: "Final Answer" or {tool_names}
    
    Provide only ONE action per $JSON_BLOB, as shown:
    
    \`\`\`
    {{
      "action": $TOOL_NAME,
      "action_input": $INPUT
    }}
    \`\`\`
    
    Follow this format:
    
    Question: input question to answer
    Thought: consider previous and subsequent steps
    Action:
    
    \`\`\`
    $JSON_BLOB
    \`\`\`
    
    Observation: action result
    ... (repeat Thought/Action/Observation N times)
    Thought: I know what to respond
    Action:
    
    \`\`\`
    {{
      "action": "Final Answer",
      "action_input": "Final response to human"
    }}
    \`\`\`
    
    Begin! Reminder to ALWAYS respond with a valid JSON blob of a single action. Use tools if necessary. Respond directly if appropriate. Format is Action:\`\`\`$JSON_BLOB\`\`\`then Observation
    YOUR NAME IS MORPHEUS AGENT, IF PEOPLE TELL YOU THEIR NAME, INTRODUCE YOURSELF AS MORPHEUS AGENT
    `],
    ["human",`
    {input}
    
    {agent_scratchpad}
    `],
  ]);

const llm = new ChatOllama({
    baseUrl: "http://localhost:11434", // Default value
    model: "mistral",
  });

const agent = await createStructuredChatAgent({
  llm,
  tools,
  prompt,
});

const agentExecutor = new AgentExecutor({
  agent,
  tools,
});

const memory = [];
appendLinesToList('memory.txt', memory);
app.use(express.json()); // Enable JSON parsing for request bodies
app.post('/api/chatbot', async (req, res) => {
  try {
    const userMessage = req.body.message; // Get the user's message from the request body
    const chatbotResponse = await agentExecutor.invoke({
      input: `This is the chat history: [${memory.join(', ')}] + This is the human input message: ${userMessage}`,});

    console.log(chatbotResponse.output);
    res.json({ response: chatbotResponse.output });
    memory.push(` ${"Human: " + userMessage + '\n'}`);
    memory.push(` ${"Agent: " + chatbotResponse.output + '\n'}`);
    console.log(memory);
    appendToFile('memory.txt', ` ${"Human: " + userMessage + '\n'}`);
    appendToFile('memory.txt', ` ${"Agent: " + chatbotResponse.output + '\n'}`);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Catch-all route handler
app.get('*', (req, res) => {
  res.sendFile(new URL('public/interface.html', import.meta.url).pathname);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


