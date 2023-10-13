import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import similarity from 'compute-cosine-similarity';
import fetch from 'node-fetch'; // Make sure to import 'fetch' to perform HTTP requests
import { createParser } from 'eventsource-parser';
import { StreamingTextResponse } from "ai";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const question = req.body.question;

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
    const file = path.resolve('/home/dom/morpheus-electron/morpheus/renderer/public/embeddings/contracts.json');
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

    // Fetch the contract data from the file
    const contractData = contractEmbeddings[maxScoreIndex].metadata;

    // Create system context prompt
    const systemContextQuestion = `Answer the Question based on the System Prompt, Contract Data, and the Question. 
    \n\n System Prompt: You are Morpheus AI, acting as a friendly agent using a large language model running locally and a chat app running in Electron. Use the app to create an output based on the contract's ABI. 
    \n\n Contract Data: ${JSON.stringify(contractData)}
    \n\n Question: ${question}`;

    // Fetch response from the API
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama2', prompt: systemContextQuestion }),
    };

    const apiResponse = await fetch('http://localhost:11434/api/generate', requestOptions);
    const completion = await apiResponse.json();

    return new StreamingTextResponse(completion);

  } catch (error) {
    console.error(error);
    return res.status(500).send('An error occurred');
  }
};
