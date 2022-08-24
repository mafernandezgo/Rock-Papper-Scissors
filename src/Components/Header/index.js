export default function Header(props) {
  return (
    <header className="header">
      <h1>
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logoImg" />
      </h1>
      <div className="scoreWrapper">
        <p>SCORE</p>
        <h2>{props.score}</h2>
      </div>
    </header>
  )
}
