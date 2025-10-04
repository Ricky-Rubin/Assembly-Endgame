import './App.css'
import React from "react"
import Header from "./Header.jsx"
import { Language } from "./Language.js"
import { clsx } from "clsx"

export default function App() {

  const [currentWord, setCurrentWord] = React.useState('react');
  const [clickedLetter, setClickedLetter] = React.useState([]);

  const wordSplit = currentWord.split('');
  const mappedSplit = wordSplit.map((letter, index) => {
    return <div key={index} className="split-word-letters">{clickedLetter.includes(letter.toUpperCase()) ? letter.toUpperCase() : ""}</div>
  })

  const wrongGuessCount = clickedLetter.filter((letter) => !wordSplit.map(one => one.toUpperCase()).includes(letter)).length;
  console.log(wrongGuessCount)

  const alphabets = "abcdefghijklmnopqrstuvwxyz"
  const splitAlphabets = alphabets.split('').map((eachLetter) => {

    const isGuessed = clickedLetter.includes(eachLetter.toUpperCase());
    const correctGuess = isGuessed && wordSplit.includes(eachLetter);
    const wrongGuess = isGuessed && !wordSplit.includes(eachLetter);

    const className = clsx({
      correct: correctGuess,
      wrong: wrongGuess
    })

    return <button className={className} onClick={forClickedLetter} key={eachLetter} id="alphabet">{eachLetter.toUpperCase()}</button>
  })

  const mappedChips = Language.map((chip, index) => {
    const isLost = index < wrongGuessCount;
    const className = clsx({
      lost: isLost
    })

    return <div style={{ backgroundColor: chip.backgroundColor, color: chip.color }} key={index} id="chip-case" className={className}>{chip.name}</div>
  })

  function forClickedLetter(event) {
    const clicked = event.target.textContent;
    setClickedLetter((prev) => {
      return [...prev, clicked]
    })
  }

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

      <div className="for-alphabets">
        {splitAlphabets}
      </div>

      <section className='for-new-game'>
        <button className="new-game">New Game</button>
      </section>
    </main>
  )
}