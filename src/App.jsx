import './App.css'
import Header from "./Header.jsx"
import { Language } from "./Language.js"

export default function App() {
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
    </main>
  )
}