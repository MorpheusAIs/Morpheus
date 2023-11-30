import os
from toolgather import toolkit
from langchain.memory import ConversationBufferMemory
from langchain.agents import AgentType, initialize_agent
from langchain.llms import Ollama



llm = Ollama(model="llama2")
memory = ConversationBufferMemory(memory_key="chat_history")
agent = initialize_agent(
    toolkit, llm, agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION, memory = memory,verbose = True)
prompt = 'What is 2 + 2?'
response = agent.run(prompt)
print(response)