import { NextResponse } from 'next/server';
import { apiCallBody } from '../utils/type';
import axios from 'axios';

export const GET = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data = await res.json();

  return NextResponse.json(data);
};

export const POST = async (req: apiCallBody) => {
  const URL = 'https://api.openai.com/v1/edits';
  const API_KEY = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post(
      URL,
      {
        model: 'code-davinci-edit-001',
        instruction: 'Refactor given React code.',
        input: req.body.code,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return NextResponse.json({ result: response.data.choices[0].text });
  } catch (error) {
    console.log(error);
  }
};
