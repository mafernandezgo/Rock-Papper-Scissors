import "./App.css"
import Header from "./Components/Header"
import { useEffect, useState } from "react"
import Button from "./Components/Button"
import Result from "./Components/Section"
import Modal from "./Components/Modal"

function App() {
  const [btnSelected, setBtnSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [winPoint, setWinPoint] = useState("")
  const [randomButton, setRandomButton] = useState()
  const [rulesModal, setRulesModal] = useState(false)

  useEffect(() => {
    if (btnSelected) {
      if (
        (btnSelected === "scissors" && randomButton === "paper") ||
        (btnSelected === "paper" && randomButton === "rock") ||
        (btnSelected === "rock" && randomButton === "scissors")
      ) {
        setWinPoint("You Win")
        setScore(score + 1)
      } else if (btnSelected === randomButton && btnSelected !== null) {
        setWinPoint("It's a Tie")
      } else {
        setWinPoint("You Lose")
      }
    }
  }, [btnSelected])

  const buttonsList = [
    {
      key: 1,
      value: "paper",
    },
    {
      key: 2,
      value: "scissors",
    },
    {
      key: 3,
      value: "rock",
    },
  ]

  function btnSelectedHandler(value) {
    if (btnSelected === null) {
      setBtnSelected(value)
    }
    setRandomButton(
      buttonsList[Math.floor(Math.random() * buttonsList.length)].value
    )
  }

  function playAgainHandler() {
    setBtnSelected(null)
    setRandomButton(null)
    setWinPoint("")
  }

  return (
    <div className="App">
      <Header score={score} />
      {btnSelected === null ? (
        <div className="buttonWrapper">
          {buttonsList.map((x) => {
            return (
              <Button
                value={x.value}
                key={x.key}
                btnSelectedHandler={btnSelectedHandler}
              />
            )
          })}
        </div>
      ) : (
        <Result
          btnSelected={btnSelected}
          randomButton={randomButton}
          winPoint={winPoint}
          setScore={setScore}
          score={score}
          playAgainHandler={playAgainHandler}
          setWinPoint={setWinPoint}
        />
      )}
      <button
        className="btnSec btnRules"
        onClick={() => setRulesModal(!rulesModal)}
      >
        RULES
      </button>
      {rulesModal ? <Modal setRulesModal={setRulesModal} /> : ""}
    </div>
  )
}

export default App
