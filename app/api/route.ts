import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';
import { openAiReq } from '../utils/type';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const GET = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data = await res.json();

  return NextResponse.json(data);
};

export const POST = async (req: openAiReq) => {
  const edit = await openai.createEdit({
    model: 'code-davinci-edit-001',
    input: req.body?.code,
    instruction: 'Refactor the code to make it easier to read',
  });

  NextResponse.json({ result: edit.data.choices[0].text });
};
