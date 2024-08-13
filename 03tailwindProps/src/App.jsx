import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Component/Card'
import './App.css'

function App() {
  let obj={
    username:"Ahmad",
    password:"123"
  }
  return (
   <>
   <h1 className='bg-green-800 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
   <Card username="Ahmad" btnText="Click Me"/> 
   <Card username="Chaudhry" btnText="Click Me"/>
   {/* jo b yahan pe value pass krein wo props mein receive ho jai gi */}
   </>
  )
}

export default App
