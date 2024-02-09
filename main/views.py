from django.shortcuts import render
import subprocess

# Create your views here.
def home(request):
    return render(request,"index.html")

def interface(request):
    return render(request,"interface.html")   

def chatbot(request):
    return render(request,"chatbot.html")



def run_streamlit_app():
    subprocess.Popen(['streamlit', 'run', 'app.py'])

run_streamlit_app()         