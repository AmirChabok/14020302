import { useState } from 'react'
import './App.css'

function App() {
  const tasks = [
    { name: "task 1", id: 1, done: true },
    { name: "task 2", id: 2, done: false },
    { name: "task 3", id: 3, done: true },
    { name: "task 4", id: 4, done: true },
  ];
  return (
    <>
      <div className="card">
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

