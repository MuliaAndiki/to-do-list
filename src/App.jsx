import { useState } from 'react';


const App = () => {
  
  const headText = 'To-Do-List';
  const tombol = 'Submit';
  const holder = 'Masukkan tugasmu disini';
  const tedit = "Edit";
  const thapus = "Hapus";

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

const handleSubmit = () => {
  setTodos(prev => {
    const newArr = [...todos];
    const newTodo = {value : value, date : date};
    const result = [...newArr, newTodo];
    setValue('');
    setDate('');
    return result;
  })
}

const handelEdit = (index) => {
  setEdit(!edit);
  !edit ? setEditIndex(index) : setEditIndex(null);

}
  return (
    <>
      <header className="">
          <div id=""className="">
              <h1 id="" className="text-center font-[jersey]">{headText}</h1>
              <div id="column"className="flex gap-[3rem] py-[3rem] pl-[1rem] items-center">
                <input id="input" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder={holder} className="border-2 rounded-md h-[3rem] hover:shadow-lg hover:shadow-cyan-500/50 duration-[1s]"></input>
                <input id="date" value={date} onChange={(e) => setDate(e.target.value)} type="date" className="border-2 rounded-md h-[3rem] hover:shadow-lg hover:shadow-cyan-500/50 duration-[1s]"></input>
                  <button onClick={() => handleSubmit()} id="button"className="hover:shadow-lg hover:shadow-cyan-500/50 duration-[1s]">
                      {tombol} 
                  </button>
              </div>
           </div>

          <div id="list" className="">
                 {todos.map((data, index) => {
                  return (
                    <div className="[flex]">
                        <div className="flex justify-between items-center px-[1rem] py-[1rem] border-2 rounded-md">
                            <input type="checkbox" className=" penampung checkbox flex items-center"></input>
                            <p className="flex items-center">{index + 1}</p>
                            {edit && editIndex === index ? (
                              <>
                              <input id="input" value={data.value} onChange={(e) => setTodos(prev => {
                                const newArr = [...prev];
                                newArr[index].value = e.target.value;
                                return newArr;
                              })} type="text" placeholder={holder} className="border-2 border-gray-600 rounded-md h-[2rem] hover:shadow-lg hover:shadow-cyan-500/50 duration-[1s]"></input>
                              <input id="date" value={data.date} onChange={(e) => setTodos(prev => {
                                const newArr = [...prev];
                                newArr[index].date = e.target.value;
                                return newArr;
                              })} type="date" className="border-2 border-gray-600 rounded-md h-[2rem] hover:shadow-lg hover:shadow-cyan-500/50 duration-[1s]"></input>
                              </>
                            ) : (
                              <>
                            <p className="flex items-center">{data.value}</p>
                            <p className="flex items-center">{data.date}</p>
                              </>
                            )}
                            <button onClick={() => handelEdit(index)} className="ubah hover:shadow-lg hover:shadow-cyan-500/50 duration-[1s]s">{tedit}</button>
                            <button className='ubah hover:shadow-lg hover:shadow-cyan-500/50 duration-[1s]' onClick={() => setTodos(prev => {
                              const newArr = [...prev.filter((_, i) => i !== index)];
                              return newArr;
                            })}>{thapus}</button>
                        </div>
                     </div>
                  )
                 })} 
          </div>
      </header>  
    </>
  );
};

export default App;