import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Logo  from './components/Logo'
import { Counter } from './Counter'

function App() {
  const [showLogo, setshowLogo] = useState(true)
  const tasks = [
    { name: "task 1", id: 1, done: true },
    { name: "task 2", id: 2, done: false },
    { name: "task 3", id: 3, done: true },
    { name: "task 4", id: 4, done: true },
  ];
  return (
    <>
    {/* {(showLogo)? (<Logo logo={reactLogo} />):(<Logo logo={viteLogo}/>)} */}
      <div className="card">
       {/* <Counter  /> */}
       {/* <button onClick={()=>setshowLogo(!showLogo)}>toggle logo</button> */}

       <ul>
      {tasks.map((m) => (
        <><li>{m.name}</li></>
      ))}
      </ul>
      
      </div>
   
    </>
  )
}

export default App

