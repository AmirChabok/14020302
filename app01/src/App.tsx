import './App.css'
import { useState } from 'react';

function App() {
  
  const Initializetasks = [
    { name: "task 1", id: 1, done: true },
    { name: "task 2", id: 2, done: false },
    { name: "task 3", id: 3, done: true },
    { name: "task 4", id: 4, done: true },
  ];
  const [tasks,setTasks]=useState(Initializetasks);
  
   const handleDelete=(task:any): void => {
    // eslint-disable-next-line no-debugger
    debugger;
    const tasks_ = tasks.filter(m => m.id !== task.id);
    setTasks(tasks_);
  }

  const handleDelete2=(e:any) : void => {
    // eslint-disable-next-line no-debugger
    debugger;
    const id = e.target.getAttribute("id")
    setTasks(tasks.filter(item => item.id !== id));
  }

  return (
    <>
    {(tasks.length===0)?<>no task</>:
      <>
      <div className="card">
      <ul>
     {tasks.map((m) => (
       <>
       <li key={m.id}>
        {m.name} {(m.done)?"✔":"X"}
        <button  onClick={()=>handleDelete(m)} style={{color:'red'}}>Delete</button>
        <button  onClick={handleDelete2} style={{color:'red'}}>Delete2</button>
        </li>
        </>
     ))}
     </ul>
     </div>
      </>
    }
    </>
  )
}

export default App

