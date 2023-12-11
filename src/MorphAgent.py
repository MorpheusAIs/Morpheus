from agent.agent import MorpheusAgent

agent = MorpheusAgent("agent/tools")
response = agent.prompt("Hi how are you? If you need to use a tool, use the correct one")
print(response)