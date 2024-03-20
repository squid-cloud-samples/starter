import squidLogo from '/Squid-Symbol-Dark.svg';
import './App.css';
import { useCollection, useDoc } from '@squidcloud/react';

type CounterDocument = {
  count: number;
};

function App() {
  const collection = useCollection<CounterDocument>('count');
  const { data } = useDoc(collection.doc('count'), {
    subscribe: true,
  });

  return (
    <>
      <div>
        <a href='https://docs.squid.cloud' target='_blank'>
          <img src={squidLogo} className='logo' alt='Squid Cloud logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => handleClick()}>
          count is {data?.count || 0}
        </button>
      </div>
    </>
  );

  async function handleClick() {
    await collection.doc('count').insert({ count: (data?.count || 0) + 1 });
  }
}

export default App;
