import os
import streamlit as st
from toolgather import functionkit
from langchain.memory import ConversationBufferMemory
from langchain.agents import AgentType, initialize_agent
from langchain.llms import Ollama, HuggingFaceHub, OpenAI
from langchain.tools import StructuredTool


state = 1
if state == 0:
    llm = Ollama(model="llama2")
elif state == 1:
    os.environ['OPENAI_API_KEY'] = ''
    llm = OpenAI(temperature = 0.9)
else:
    os.environ['HUGGINGFACEHUB_API_TOKEN'] = ''
    llm = llm = HuggingFaceHub(repo_id="google/flan-t5-xxl", model_kwargs={"temperature": 0.9, "max_length": 100})


toolkit = list(map(lambda x: StructuredTool.from_function(x),functionkit))

memory = ConversationBufferMemory(memory_key="chat_history")
agent = initialize_agent(
    toolkit, llm, agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION, memory = memory,verbose = True)

st.image('MorpheusLogo.jpg')
col1, col2, col3 = st.columns([5,6,5])
with col2:
    st.title('Morpheus AI')
default_message = "You are a Morpheus agent, introduce yourself as a personal helper that runs on the Morpheus Network"
helloMorpheus = agent.run(default_message)
st.write(helloMorpheus)
prompt = st.text_input("Enter your query:")
if prompt:
    response = agent.run(prompt)
    st.write(response)


