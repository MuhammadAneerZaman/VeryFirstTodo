"use client";

import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  }
  const handleAddTodo = ()=>{
    setTodo([...todo, inputValue]);
    setInputValue("");
  }

  const handleDeleteTodo = (index)=>{

    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
    return <div className=" alert-warning"></div>
  };
  return (
    <div className=" max-w-md mx-auto">
      <h1 className="  mb-4 text-2xl"> Todo App</h1>
      <div className=" flex">
      <input className=" border border-gray-400 mr-2 px-4 py-2 flex-grow" type="text" placeholder="Enter a Todo item" value={inputValue} onChange={handleInputValue} />
      <button onClick={handleAddTodo} className=' px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded'> Add item </button>
      </div>
      <ul className=" list-disc list-inside my-4">
        { 
          todo.map((todoText,index)=>
            (
            <li key={index} className=" flex justify-between items-center mb-2">
              {todoText}
              <button onClick={()=> handleDeleteTodo(index)} className=" bg-red-400 rounded text-white px-2 py-1 hover:bg-red-700 cursor-pointer">Delete</button>
            </li>
            ))
        }
      </ul>
    </div>
  )
}
