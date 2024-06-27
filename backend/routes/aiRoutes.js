import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST request to generate text using OpenAI
router.post('/generate-text', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Call OpenAI's chat completion API
    const aiResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });

    // Log the AI response for debugging
    console.log(aiResponse.choices[0]);

    // Check if aiResponse or aiResponse.choices is undefined or empty
    if (!aiResponse || !aiResponse.choices || aiResponse.choices.length === 0) {
      throw new Error('Unexpected response structure from OpenAI API');
    }

    // Extract the generated text from the response
    const generatedText = aiResponse.choices[0].message.content.trim();

    // Return the generated text in the response
    res.status(200).json({ text: generatedText });
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
