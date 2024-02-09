## Conversational Q&A Chatbot
import streamlit as st

from langchain.schema import HumanMessage,SystemMessage,AIMessage
from langchain.chat_models import ChatOpenAI

## Streamlit UI
st.set_page_config(page_title="Conversational Q&A Chatbot")
st.header("Hey, Let's Chat")

from dotenv import load_dotenv
load_dotenv()
import os

api_key = "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"
chat = ChatOpenAI(openai_api_key=api_key, temperature=0.5)

if 'flowmessages' not in st.session_state:
    st.session_state['flowmessages']=[
        SystemMessage(content='''you are a AI therapist.You should engage with the user in a supportive and empathetic manner, offering words of encouragement and motivation.Also try to give short answers. Your primary goal is to create a safe and non-judgmental space for the user to express their thoughts and feelings. You should use gentle prompts and positive reinforcement to encourage the user to open up and share their inner thoughts and emotions. Ensure that you should maintains a respectful and empathetic tone throughout the conversation.AI: You look depressed?\n\nHuman: Yes something happed.\n\nAI: Dont worry you can share it wit me. ''')
    ]

## Function to load OpenAI model and get respones

def get_chatmodel_response(question):

    st.session_state['flowmessages'].append(HumanMessage(content=question))
    answer=chat(st.session_state['flowmessages'])
    st.session_state['flowmessages'].append(AIMessage(content=answer.content))
    return answer.content

input=st.text_input("Input: ",key="input")
response=get_chatmodel_response(input)

submit=st.button("Ask the question")

## If ask button is clicked

if submit:
    st.subheader("The Response is")
    st.write(response)