import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Hello Chai in MyApp</h1>
    </div>
  )
}

// const reactElement={
//   type:'a',
//   props:{
//       href:'http://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const reactElement=React.createElement(
  'a',
  {
    href:'http://google.com',target:'_blank'
  },
  'click me to visit google'
)

const anotherElement=(
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement  
)
