import './App.css'
import React from "react"
import Header from "./Header.jsx"
import { Language } from "./Language.js"
import { clsx } from "clsx"
import { getFarewellMessage } from "./Utility.js" 
import { getRandomWord } from "./Utility.js"

export default function App() {

  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  const [clickedLetter, setClickedLetter] = React.useState([]);
  const [farewellMessage, setFarewellMessage] = React.useState('');

  const wordSplit = currentWord.split('');

  const wrongGuessCount = clickedLetter.filter((letter) => !wordSplit.map(one => one.toUpperCase()).includes(letter)).length;
  const isGameWon = currentWord.toUpperCase().split("").every(letter => clickedLetter.includes(letter))
  const isGameLost = wrongGuessCount >= Language.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const mappedSplit = wordSplit.map((letter, index) => {
    return <div key={index} className="split-word-letters" style={{ opacity: clickedLetter.includes(letter.toUpperCase()) ? 1 : 0.9, color: clickedLetter.includes(letter.toUpperCase()) ? "#FFFFFF" : "#EC5D49" }}>
      {isGameLost ? letter.toUpperCase() : (clickedLetter.includes(letter.toUpperCase()) ? letter.toUpperCase() : "")}
    </div>
  })

  const alphabets = "abcdefghijklmnopqrstuvwxyz"
  const splitAlphabets = alphabets.split('').map((eachLetter) => {

    const isGuessed = clickedLetter.includes(eachLetter.toUpperCase());
    const correctGuess = isGuessed && wordSplit.includes(eachLetter);
    const wrongGuess = isGuessed && !wordSplit.includes(eachLetter);

    const className = clsx({
      correct: correctGuess,
      wrong: wrongGuess
    })

    return <button 
              disabled={isGameOver} 
              className={className} 
              onClick={forClickedLetter} 
              key={eachLetter} 
              id="alphabet"
              aria-disabled={clickedLetter.includes(eachLetter)}
              aria-label={"Letter ${eachLetter}"}>
                {eachLetter.toUpperCase()}
            </button>
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

    const isIncorrect = !wordSplit.map(one => one.toUpperCase()).includes(clicked)

    if (isIncorrect) {
      const chipToEliminate = Language[wrongGuessCount];
      setFarewellMessage(getFarewellMessage(chipToEliminate.name))
    }
  }

  const gameOverMessage = clsx("result", {
    win: isGameWon,
    lose: isGameLost
  })

  function resetGame() {
    setCurrentWord(() => getRandomWord());
    setClickedLetter([]);
    setFarewellMessage('');
  }

  return (
    <main>
      <Header />

      <section aria-live="polite" role="status" className={gameOverMessage}>
        {!isGameOver && farewellMessage && <p className="farewell-text">{farewellMessage}</p>}

        {isGameOver ? (
          isGameWon ? 
          (<>
            <h2>You Win!</h2>
            <p>Well done 🎉</p>
          </>) : 

          (
            <>
              <h2>Game over!</h2>
              <p>You lose! Better start learning Assembly 😭</p>
            </>
          )) : null}
      </section>

      <div className="chip-container">
        <div className="sub-container">{mappedChips}</div>
      </div>

      <div className="word-display">
        {mappedSplit}
      </div>

      {/* This is a combined visually-hidden aria-live region for status updates */}
      <section
        className="sr-only"
        aria-live="polite"
        role="status"
      >
        <p>
          { currentWord.includes(clickedLetter[clickedLetter.length - 1]) ? `Correct! The lettter ${clickedLetter.length - 1} is in the word.` : `Sorry, the letter ${clickedLetter.length - 1} is not in the word.` }
        </p>
          You have {Language.length - 1} gueses left
        <p>
          Current word: {currentWord.split("").map(letter => clickedLetter.includes(letter) ? letter + "." : "blank.").join(" ")} 
        </p>
      </section>

      <div className="for-alphabets">
        {splitAlphabets}
      </div>

      <section className='for-new-game'>
        {isGameOver && <button className="new-game" onClick={resetGame}>New Game</button>}
      </section>
    </main>
  )
}