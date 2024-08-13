import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// React Import nai krte kyun ke react under the hood a jata bablles ki madad se _jsx
function App() {

let [counter,setCounter]=useState(15);
// 0th index pe value hoti hai aur 1st index pe function
// Use State mein jitne b updates hoti hain wo batches ki surat mein jati hain UI mein b aur variables mein b

const addValue=()=>{
  if(counter<20){
  counter++;
  setCounter(counter);
 console.log("Value Added", counter);
  }
  else{
    return console.log("Can't go greater than 20")
  }
}

// Aur agr ap aik dam value increase krna chahte hai callback function mein previous state leke increase krein gay

const removeValue=()=>{
  if(counter>0){
  counter--;
  setCounter(counter);
  console.log('Value removed',counter);
  }
  else{
    return console.log("can't go less than 0")
  }
}

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <footer>Footer : {counter}</footer>
    </>
  )
}

export default App
