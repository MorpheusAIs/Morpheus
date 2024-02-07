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
    Finally, this is the chat history {chat_history}, make sure you use it if the conversation requires it.
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

import { AIMessage, HumanMessage } from "@langchain/core/messages";

const agentExecutor = new AgentExecutor({
  agent,
  tools,
});

const result2 = await agentExecutor.invoke({
  input: "what's my name?",
  chat_history: [
    new HumanMessage("hi! my name is cob"),
    new AIMessage("Hello Cob! How can I assist you today?"),
  ],
});
console.log(result2);