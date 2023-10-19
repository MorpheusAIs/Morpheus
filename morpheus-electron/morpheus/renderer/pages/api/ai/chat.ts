import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import similarity from 'compute-cosine-similarity';
import fetch from 'node-fetch';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  try {

    const question = req.body.question;

    const chatFile = path.resolve('morpheus-electron/morpheus/renderer/public/channelthreads/chat.jsonl');

    const chatHistory = JSON.parse(fs.readFileSync(chatFile, 'utf8'));

    console.log('Chat History', chatHistory);

    // Write the chat history to the file
    fs.appendFileSync(chatFile, JSON.stringify({ role: "domsteil", content: question }) + '\n');

    // Fetch embeddings from the API
    const embeddingsRequestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama2', prompt: question }),
    };

    const embeddingResponse = await fetch('http://localhost:11434/api/embeddings', embeddingsRequestOptions);
    const embeddingJson = await embeddingResponse.json();
    const xq = embeddingJson.embedding;

    // Read contract embeddings from the file
    const file = path.resolve('morpheus-electron/morpheus/renderer/public/embeddings/uniswap.json');
    const contractEmbeddings = JSON.parse(fs.readFileSync(file, 'utf8'));

    // For each item in contract embeddings find the one with the highest similarity score
    let maxScore = 0;
    let maxScoreIndex = 0;

    for (let i = 0; i < contractEmbeddings.length; i++) {
      const xc = contractEmbeddings[i].values;
      const score = similarity(xq, xc);
      if (score > maxScore) {
        maxScore = score;
        maxScoreIndex = i;
      }
    }

    console.log(contractEmbeddings.contracts[0].metadata);

    // Fetch the contract data from the file
    const contractData = contractEmbeddings.contracts[0].metadata;

    console.log('Contract Metadata', contractData);

    // Create system context prompt
    const systemContextQuestion = `Answer the Question based on the System Prompt, Contract Data, and the Question. 
    \n\n System Prompt: You are Morpheus AI, acting as a friendly agent using a large language model running locally with a chat app in Electron. Use the app to create an chat output to assit executing a smart contract transaction. 
    Based on the contract ask the user for the required information to execute the transaction. Don't recommend any specific wallet or exchange. The user already has metamask connected. You should just ask what you need in order to complete the transaction.
    \n\n Contract Data: ${JSON.stringify(contractData)}
    \n\n Question: ${question}`;

    console.log('System Context Question', systemContextQuestion);

    // Fetch response from the API
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  model: 'llama2', prompt: question, stream: false }),
    };

    const apiResponse = await fetch('http://localhost:11434/api/generate', requestOptions);

    // Return JSON from the ReSponse 
    const responseJson = await apiResponse.json();

    console.log('Response JSON', responseJson);

    // Write the chat history to the file
    fs.appendFileSync(chatFile, JSON.stringify({ role: 'Morpheus', content: responseJson.response }) + '\n');

    // Return the response
    res.status(200).json({ "response": responseJson.response });

    return 'success'

  } catch (error) {
    console.error(error);
    return res.status(500).send('An error occurred');
  }
};

