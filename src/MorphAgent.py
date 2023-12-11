from agent.agent import MorpheusAgent

agent = MorpheusAgent("agent/tools",1)
response = agent.prompt("what is 30 ^ 6?")
print(response)