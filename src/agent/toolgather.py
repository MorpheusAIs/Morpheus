import importlib
import sys

def gather_tools_from_module(module_name='tools'):
    # Step 1: Dynamically import the module
    if module_name in sys.modules:
        # If already imported, reload it
        imported_module = importlib.reload(sys.modules[module_name])
    else:
        imported_module = importlib.import_module(module_name)

    # Step 2: Iterate over the attributes of the module and collect tools
    tool_objects = []
    for attr_name in dir(imported_module):
        if 'tool' in attr_name:
            tool_objects.append(getattr(imported_module, attr_name))

    return tool_objects

# Example usage
toolkit = gather_tools_from_module()

