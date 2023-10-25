### Ollama Instructions

1) Download Ollama from [Ollama AI](https://Ollama.ai)
   
   <img width="566" alt="" src="https://github.com/MorpheusAIs/Morpheus/assets/76454555/2c0f3daf-5917-4594-bb6d-5d55bb7eadf7">

2)Double click to unzip

   <img width="566" alt="" src="https://github.com/MorpheusAIs/Morpheus/assets/76454555/66c7701d-ebd3-49c7-8d5d-0fd27e9761df">

3) Unzip Ollama.zip
  
   <img width="566" alt="Screen Shot 2023-10-24 at 2 26 15 PM" src="https://github.com/MorpheusAIs/Morpheus/assets/76454555/fdb9727a-8fcb-4078-bb0f-4bfeb5fcc655">
   
4) Double-click the Ollama Icon to install.  You may see a message reminding you that you downloaded this from the internet. Agree and allow.
   
   <img width="566" alt="accept" src="https://github.com/MorpheusAIs/Morpheus/assets/76454555/d9d8038b-0494-4170-8aeb-2a77000f629a">

   
5) When the install is finished, you will see a little llama lounging in the system bar.
   
<img width="157" alt="ollama" src="https://github.com/MorpheusAIs/Morpheus/assets/76454555/9fbd3195-fcb2-4789-9e6e-dbc0fc96dcdd">
 
11) You're almost done! Now we open the terminal to test the install.


12) When you've opened the terminal app, type
   ```Ollama run orca-mini:latest```

13) This will download a small model called Orca-Mini. You can scale up to a lorger model as your computer will allow.  We're just using orca-mini to test. 

Now you're ready to install Morpheus.  If you are ever wondering if Ollama is running, open a browser and navigate to https://localhost:11434, and if it's running, you will see a message saying so.

![localhost](https://github.com/MorpheusAIs/Morpheus/assets/76454555/1dfcfffe-2365-402a-84de-f0fc17cf3b6c)

If it's not running, you will see a "Not Found" error.  Just open terminal and enter:
```ollama serve``` and refresh https://localhost:11434.
