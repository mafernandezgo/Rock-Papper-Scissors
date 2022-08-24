import Button from "../Button/index"

export default function Result(props) {
  const { btnSelected, randomButton, winPoint, setWinPoint, playAgainHandler } =
    props

  function winnerHandler() {
    if (
      (btnSelected === "scissors" && randomButton === "paper") ||
      (btnSelected === "papel" && randomButton === "rock") ||
      (btnSelected === "rock" && randomButton === "scissors")
    ) {
      setWinPoint("You Win")
    } else if (btnSelected === randomButton) {
      setWinPoint("It's a Tie")
    } else {
      setWinPoint("You Lose")
    }
  }

  const timer = setTimeout(console.log("hola"), 2000)

  function housePicked() {
    return (
      <section className={winPoint === "You Lose" ? "win" : ""}>
        <h3>The House Picked</h3>
        <Button value={randomButton} />
      </section>
    )
  }

  winnerHandler()

  return (
    <div className="Results">
      <section className={winPoint === "You Win" ? "win" : ""}>
        <h3>You Picked</h3>
        <Button value={btnSelected} />
      </section>

      <section>
        <h2>{winPoint}</h2>
        <button onClick={playAgainHandler} className="btnSec btnPlayAgain">
          Play Again
        </button>
      </section>

      <section className={winPoint === "You Lose" ? "win" : ""}>
        <h3>The House Picked</h3>
        <Button value={randomButton} />
        {/* {timer} */}
      </section>
    </div>
  )
}
