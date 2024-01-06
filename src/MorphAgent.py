import sys
from agent.agent import MorpheusAgent

def main(prompt):
    agent = MorpheusAgent("agent/tools")
    response = agent.prompt(prompt)
    print(response)

if __name__ == "__main__":
    main(sys.argv[1])