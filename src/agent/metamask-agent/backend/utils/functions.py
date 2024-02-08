from langchain_core.messages import AIMessage, HumanMessage

#TODO: format correctly from write to messages in vue
def convert_to_messages(input_strings):
    messages = []
    # Ensure the input_strings list has an even number of elements
    if len(input_strings) % 2 != 0:
        raise ValueError("The input_strings list must contain an even number of elements.")
    
    for i in range(0, len(input_strings), 2):
        # Group each pair of messages into the desired dictionary format
        message_pair = {"human": input_strings[i], "ai": input_strings[i+1]}
        messages.append(message_pair)
    
    formatted_chat_history = "\n".join([f'Human: {entry["human"]}\nAI: {entry["ai"]}' for entry in messages])
    return formatted_chat_history 

##input_strings = ["hello world", "Hello There!", "How are you?", "I'm fine, thank you!"]
#chat_history = convert_to_messages(input_strings)
#print(chat_history)
