from agent.agent import MorpheusAgent

agent = MorpheusAgent("agent/tools",0)
response = agent.prompt("What is 20 x 5")
print(response)