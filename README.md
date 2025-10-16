# 🧩 Assembly Endgame

**Assembly Endgame** is the final project from the React course I just completed on [Scrimba](https://scrimba.com).  
The project brings together everything I’ve learned so far in React — from **state management** to **conditional rendering**, **inline styling**, **components**, **dependencies**, and **ternary operator usage** — in a fun, interactive hangman-style game.

---

## 🧠 Project Overview

Empty boxes representing the number of letters in the word to be guessed are displayed above an alphabet tile. Programming languages are shown at the top of the boxes, and for every **correct guess**, the background of the selected letter turns **green**.  
For **wrong guesses**, the background turns **red**, a **programming language gets eliminated**, and a message dynamically appears in a section below — something like:

> “Oh no, not JavaScript.”

When the **second-to-last programming language** is eliminated before the player correctly guesses the word, the alphabet tiles are disabled and a **“Game Over”** message is displayed.  
The missing letters are also revealed in **red text**, so the player sees the complete word they were trying to guess.

When the player wins a round, **confetti drops** 🎉 and a **congratulatory message** is displayed before the confetti animation begins.

---

## 🧰 Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **React**
- **react-confetti** (for celebratory confetti)
- **nanoid** (for custom IDs)

---

## ⚡ Features

- Interactive letter tiles with visual feedback  
- Dynamic elimination of programming languages with live updates  
- Win and loss states with confetti animation and red-text reveal  
- Responsive and user-friendly interface  
- Dynamic message display for eliminated languages

---

## 🛠 Setup

- Clone the repository onto your local machine
- git clone https://github.com/your-username/assembly-endgame.git
- cd assembly-endgame
- npm install 
- npm run dev

Open the localhost link to view the project in browser.

## 🌐 Live Website

- [Assembly Endgame](https://assembly-endgame-phi-vert.vercel.app/)