// Description: Chat API for the AI
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

export default async (req: NextApiRequest, res: NextApiResponse) => {

        var text = req.body.knowledge;
        var user_id = req.body.user_id;

        try {

            var raw = JSON.stringify({ "input": text, "model": "text-embedding-ada-002", "user": user_id });

            var embeddingsRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: raw
            };

            var vectors_embeddings;

            // Make Callout to Ollama to get Embeddings

            console.log('Creating Embedding...');
  
            // Make Callout to Ollama
            let embedding_response = await fetch("http://localhost:11434/api/embeddings", embeddingsRequestOptions)
                .then(response => response.json())
                .then(json => {
                    vectors_embeddings = json.embedding[0];
                })
                .catch(error => {
                    console.error(error);
                })

            console.log(embedding_response);

            var vectors_object = { id: uuid(), values: vectors_embeddings, metadata: { "text": text, "user": user_id } };

            console.log(vectors_object);

            // Save Embeddings to /public/data/embeddings

            var fs = require('fs');

            var path = require('path');

            var dir = path.resolve('./public/data/embeddings');

            var file = path.resolve('./public/data/embeddings/' + vectors_object.id + '.json');

            fs.mkdirSync(dir, { recursive: true });

            fs.writeFileSync(file, JSON.stringify(vectors_object));

            // Return the Embeddings

            return res.status(200).json(vectors_object);

        } catch (error) {
            console.error(error);
            return res.status(500).send('An error occurred');
        }

}