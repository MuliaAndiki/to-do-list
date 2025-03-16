import {submit} from '../src/function/submit';

const App = () => {
  const headText = 'Tugas to-do-list';
  const tombol = 'Submit';
  const holder = 'isikan tugasmu disini';

  return (
      <header className="">
          <div id=""className="">
              <h1 id="" className="text-center">{headText}</h1>
              <div id="column"className="flex gap-[4rem] py-[3rem]">
                <input id="input" type="text" placeholder={holder} className="border-2 border-gray-600 rounded-md"></input>
                <input id="date" type="date" className="border-2 rounded-md"></input>
                  <button id="button"className="border-2 rounded-md"onClick={submit}>
                      {tombol}
                  </button>
              </div>
           </div>

          <div id="list" className="">
                  
          </div>
      </header>  
  );
};

export default App;