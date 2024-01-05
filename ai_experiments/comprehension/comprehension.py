import openai
import requests

import pandas as pd

# Load the CSV data into a DataFrame
df = pd.read_csv('PlausiblePrompts.csv')
# df = df.iloc[:4]  # FIXME

instruction = ("You are a helpful assistant who is an expert at explaining cryptocurrency concepts. "
               "Can you give a brief explanation for each of these plausible requests?")


def explain_via_gpt35(user_request):
    resp = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content":
                instruction},
            {"role": "user", "content": f"{user_request}"},
        ],
        temperature=0.65,
    )
    explanation = resp["choices"][0]["message"]["content"]

    return explanation


def explain_via_ollama_llama2_7B(user_request):
    endpoint = "http://localhost:11434/api/generate"

    # Define the Data
    data = {
        "model": "llama2-uncensored",
        "prompt": f"{user_request}"
    }
    try:

        # Send the POST request
        response = requests.post(endpoint, json=data)

        text_extracted = "".join((pd.read_json(path_or_buf=response.text, lines=True)["response"].values))
    except BaseException:
        return "unable to process"

    return text_extracted


if __name__ == "__main__":

    try:
        df['Expert: GPT3.5'] = df['Request'].apply(explain_via_gpt35)
        df['Expert: Llama 2 7B Uncensored'] = df['Request'].apply(explain_via_ollama_llama2_7B)

    except BaseException as e:
        pass

    finally:
        df.to_excel("PlausiblePrompts-expert-eval.xlsx", index=False)
