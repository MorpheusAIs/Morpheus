from langchain.tools import StructuredTool

def subtractor(a: float, b:float) -> float:
    """Subtract the provided floats."""
    return a - b
subtool = StructuredTool.from_function(subtractor)

def multiplier(a: float, b: float) -> float:
    """Multiply the provided floats."""
    return a * b
multtool = StructuredTool.from_function(multiplier)

def adder(a: float, b: float) -> float:
    """Add the provided floats."""
    return a + b

addtool = StructuredTool.from_function(adder)

def divider(a: float, b: float) -> float:
    """Divide the provided floats."""
    return a / b
divtool = StructuredTool.from_function(divider)