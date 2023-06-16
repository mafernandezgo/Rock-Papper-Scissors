import Button from "../Button/index"

export default function Result(props) {
  const { btnSelected, randomButton, winPoint, playAgainHandler } = props

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
      </section>
    </div>
  )
}
