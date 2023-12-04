import os
import importlib
import inspect

def import_functions_from_directory(directory):
    functions_list = []
    for filename in os.listdir(directory):
        if filename.endswith('.py') and not filename.startswith('__'):
            module_name = filename[:-3]
            module_path = f"{directory}.{module_name}"
            module = importlib.import_module(module_path)

            for name, func in inspect.getmembers(module, inspect.isfunction):
                functions_list.append(func)
    
    return functions_list

functionkit = import_functions_from_directory('tools')



