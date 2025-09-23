import './App.css'
import React from "react"
import Header from "./Header.jsx"
import { Language } from "./Language.js"

export default function App() {

  const [currentWord, setCurrentWord] = React.useState('react');

  const wordSplit = currentWord.split('');
  const mappedSplit = wordSplit.map((letter) => {
    return <span className="split-word-letters">{letter.toUpperCase()}</span>
  })

  const mappedChips = Language.map((chip, index) => {
    return <div style={{ backgroundColor: chip.backgroundColor, color: chip.color }} key={index} className="chip-case">{chip.name}</div>
  })

  return (
    <main>
      <Header />

      <section className="result">
        <h2>You Win!</h2>
        <p>Well done 🎉</p>
      </section>

      <div className="chip-container">
        <div className="sub-container">{mappedChips}</div>
      </div>

      <div className="word-display">
        {mappedSplit}
      </div>
    </main>
  )
}