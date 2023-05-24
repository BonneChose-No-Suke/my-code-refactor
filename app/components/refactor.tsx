'use client';

import axios from 'axios';
import { useState } from 'react';

export const Refactor = () => {
  const [response, setResponse] = useState(null);
  const [code, setCode] = useState<string | null>(null);

  const changeCode = (code: string) => {
    setCode(code);
  };

  const onCallRefactor = async () => {
    if (!code) {
      alert('コードを入力してください。');
      return;
    }
    const data = await getData(code);

    setResponse(data.result);
  };
  return (
    <>
      <div className='flex flex-col items-center gap-5 mt-4'>
        <p className='text-center'>
          下のテキストボックスにリファクタしたいコードをコピペして、リファクタ開始をクリックしてください。
        </p>
        <textarea
          onChange={(e) => changeCode(e.target.value)}
          className='w-4/5 h-64 border rounded-lg'
        />
        <button
          onClick={() => onCallRefactor()}
          className='px-2 py-4 border rounded-lg text-white bg-[#f45512]'>
          リファクター開始
        </button>
      </div>
      <div className='flex flex-col items-center gap-4 mt-8'>
        <h2>リファクタ結果</h2>
        <div className='w-4/5 h-64 border rounded-lg'>
          <p className='p-8'>{response ?? '結果がここに表示されます。'}</p>
        </div>
      </div>
    </>
  );
};

const getData = async (code: string) => {
  const res = await axios
    .post('http://localhost:3000/api', { code: code })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return res.data;
};
