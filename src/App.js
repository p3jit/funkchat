import './App.css';
import LeftNav from './components/leftnav/LeftNav';
import RightNav from './components/rightnav/RightNav';

function App() {
  return (
    <div className='flex justify-center items-center h-screen w-screen p-10'>
      <main className='bg-zinc-700 text-white flex w-full rounded-lg'>
        <LeftNav/>
        <RightNav/>
      </main>
    </div>
  );
}

export default App;
