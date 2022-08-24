export default function Modal(props) {
  return (
    <div className="Modal">
      <header>
        <h2>RULES</h2>
        <button onClick={() => props.setRulesModal(false)}> x </button>
      </header>
      <img
        style={{ width: "100%" }}
        src={process.env.PUBLIC_URL + `/images/image-rules.svg`}
      />
    </div>
  )
}
