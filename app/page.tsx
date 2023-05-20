export default function Home() {
  const response = null;
  return (
    <main>
      <h1 className='text-center text-xl py-3'>コードリファクター</h1>
      <div className='flex flex-col items-center gap-5 mt-4'>
        <p className='text-center'>
          下のテキストボックスにリファクタしたいコードをコピペして、リファクタ開始をクリックしてください。
        </p>
        <textarea className='w-4/5 h-64 border rounded-lg' />
        <button className='px-2 py-4 border rounded-lg text-white bg-[#f45512]'>
          リファクター開始
        </button>
      </div>
      <div className='flex flex-col items-center gap-4 mt-8'>
        <h2>リファクタ結果</h2>
        <div className='w-4/5 h-64 border rounded-lg'>
          <p className='p-8'>{response ?? '結果がここに表示されます。'}</p>
        </div>
      </div>
    </main>
  );
}
