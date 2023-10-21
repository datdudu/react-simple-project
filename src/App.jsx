import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBtn from './Btn.jsx'
function App() {
  const name = "Eduardo"
  const surName = "Carvalho"
  const fn = () => console.log("cliquei")

  return (
    <>
      <AppBtn fn={fn} nome={name} sobrenome={surName}/>
      <p></p>
    </>
  )
}

export default App
