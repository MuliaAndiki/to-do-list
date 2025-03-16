import { useState } from 'react';
const App = () => {
  const headText = 'Tugas to-do-list';
  const tombol = 'Submit';
  const holder = 'Masukkan tugasmu disini';

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
      <header className="">
          <div id=""className="">
              <h1 id="" className="text-center">{headText}</h1>
              <div id="column"className="flex gap-[4rem] py-[3rem] pl-[2rem]">
                <input id="input" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder={holder} className="border-2 border-gray-600 rounded-md"></input>
                <input id="date" value={date} onChange={(e) => setDate(e.target.value)} type="date" className="border-2 rounded-md"></input>
                  <button onClick={() => handleSubmit()} id="button"className="border-2 rounded-md">
                      {tombol}
                  </button>
              </div>
           </div>

          <div id="list" className="">
                 {todos.map((data, index) => {
                  return (
                    <div className=" flex justify-between p-2">
                        <div className="flex">
                            <input type="checkbox" className="w-full penampung checkbox flex items-center"></input>
                            <p className="flex items-center">{index + 1}</p>
                            {edit && editIndex === index ? (
                              <>
                              <input id="input" value={data.value} onChange={(e) => setTodos(prev => {
                                const newArr = [...prev];
                                newArr[index].value = e.target.value;
                                return newArr;
                              })} type="text" placeholder={holder} className="border-2 border-gray-600 rounded-md"></input>
                              <input id="date" value={data.date} onChange={(e) => setTodos(prev => {
                                const newArr = [...prev];
                                newArr[index].date = e.target.value;
                                return newArr;
                              })} type="date" className="border-2 rounded-md"></input>
                              </>
                            ) : (
                              <>
                            <p className="flex items-center">{data.value}</p>
                            <p className="flex items-center">{data.date}</p>
                              </>
                            )}
                            <button onClick={() => handelEdit(index)} className="ubah">edit</button>
                            <button className='ubah' onClick={() => setTodos(prev => {
                              const newArr = [...prev.filter((_, i) => i !== index)];
                              return newArr;
                            })}>hapus</button>
                        </div>
                     </div>
                  )
                 })} 
          </div>
      </header>  
  );
};

export default App;