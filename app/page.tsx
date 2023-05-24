import { Refactor } from './components/refactor';

export default async function Home() {
  return (
    <main>
      <h1 className='text-center text-xl py-3'>コードリファクター</h1>
      <Refactor />
    </main>
  );
}
