import os
import sys
import importlib
import inspect
from langchain.memory import ConversationBufferMemory
from langchain.agents import AgentType, initialize_agent
from langchain.llms import Ollama, HuggingFaceHub, OpenAI
from langchain.tools import StructuredTool

class MorpheusAgent:
    def __init__(self, toolpath,state):
        self.state = state
        self.openai_api_key = ''
        self.huggingfacehub_api_token = '' 
        self.agent = None
        self.functionkit = self.import_functions_from_directory(toolpath)
        self.initialize_agent()
    
    def initialize_agent(self):
        if self.state == 0:
            self.llm = Ollama(model="llama2")
        elif self.state == 1:
            if self.openai_api_key:
                os.environ['OPENAI_API_KEY'] = self.openai_api_key
            self.llm = OpenAI(temperature=0.9)
        else:
            if self.huggingfacehub_api_token:
                os.environ['HUGGINGFACEHUB_API_TOKEN'] = self.huggingfacehub_api_token
            self.llm = HuggingFaceHub(repo_id="google/flan-t5-xxl", model_kwargs={"temperature": 0.9, "max_length": 100})

        toolkit = list(map(lambda x: StructuredTool.from_function(x), self.functionkit))
        memory = ConversationBufferMemory(memory_key="chat_history")
        self.agent = initialize_agent(
            toolkit, self.llm, agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION, memory=memory, verbose=True)
    def prompt(self, prompt):
        response = self.agent.run(prompt)
        return response
    
    def import_functions_from_directory(self, directory):
        functions_list = []
        sys.path.insert(0, os.path.dirname(directory))

        for filename in os.listdir(directory):
            if filename.endswith('.py') and not filename.startswith('__'):
                module_name = filename[:-3]
                module_path = f"{os.path.basename(directory)}.{module_name}"
                module = importlib.import_module(module_path)

                for name, func in inspect.getmembers(module, inspect.isfunction):
                    functions_list.append(func)

        sys.path.pop(0)
        return functions_list





