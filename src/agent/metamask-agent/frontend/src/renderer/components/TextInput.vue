<template>
    <div v-if="!loading">
      <input v-model="inputText" 
            type="text" 
            placeholder="Message Morpheus"
            @keyup.enter="requestPrompt"/>
    </div>
    <div v-else class="loading-dots">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'TextInput',
    data() {
      return {
        inputText: '',
        loading: false,
        chatHistory: []
      }
    },
    methods: {
       async requestPrompt(){
            console.log("dynamic")
            if (!this.inputText.trim()) return; // Prevent empty requests
            this.loading = true; // Show loading indicator
            this.$emit('newlog', this.inputText)
            let response = {}
            try {
                response = await axios.post('http://127.0.0.1:8000/prompt_ollama', {
                prompt: this.inputText,
                chat_history_str: this.chatHistory // Assuming you want to send an empty array or any existing chat history
            });
                console.log(response.data); // Handle the response as needed
            } catch (error) {
                console.error('API request failed:', error);
            } finally {
                this.$emit('newlog', response.data)
                this.chatHistory.push(this.inputText)
                this.chatHistory.push(response.data.message)
                this.inputText = ''; // Clear the input
                this.loading = false; // Hide loading indicator
            }
        }
    }
  }
  </script>
  
  <style scoped>
  input {
    width: 70%;
    padding: 10px;
    margin: 30px;

    border: 2px solid #FF7F50;
    border-radius: 30px;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color:  #2F4F4F; 
    color:    rgb(255, 255, 255);   
  }
  
  input::placeholder {
    color:   rgb(255, 255, 255); /* White placeholder text */
  }

  input:focus{
    outline: none;
  }

  .loading-dots{
    display: flex;
    margin-bottom: 5px;
    margin-left: 7%;
    padding: 3% ;
  }

  .loading-dots .dot{
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #FF7F50;
    border-radius: 50%;
    animation: wave 1.3s linear infinite;
    margin-left: 5px;
  }


  .loading-dots .dot:nth-child(2){
    animation-delay: -1.1s;
  }

  .loading-dots .dot:nth-child(3){
    animation-delay: -0.9s;
  }

  @keyframes wave {
	0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-15px);
	}
  }
  </style>
  