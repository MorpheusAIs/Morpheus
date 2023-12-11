import os
import sys
import importlib
import inspect
from langchain.memory import ConversationBufferMemory
from langchain.agents import AgentType, initialize_agent
from langchain.llms import Ollama
from langchain.tools import StructuredTool

class MorpheusAgent:
    def __init__(self, toolpath):
        
        self.agent = None
        self.functionkit = self.import_functions_from_directory(toolpath)
        self.initialize_agent()
    
    def initialize_agent(self):
        self.llm = Ollama(model="mistral")
        toolkit = list(map(lambda x: StructuredTool.from_function(x), self.functionkit))
        self.memory = ConversationBufferMemory(memory_key="chat_history")
        self.agent = initialize_agent(
            toolkit, self.llm, agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION, memory=self.memory, verbose=True)
    def prompt(self, prompt):
        response = self.agent(prompt)
        output = response['output']
        self.writememory()
        return output
    
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
    def writememory(self):
        with open("memory.txt", "a") as file:
            file.write(self.memory.buffer)








