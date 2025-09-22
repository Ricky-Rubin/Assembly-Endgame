import './App.css'
import Header from "./Header.jsx"

export default function App() {

  return (
    <main>
      <Header />

      <section className="result">
        <h2>You Win!</h2>
        <p>Well done 🎉</p>
      </section>
    </main>
  )
}