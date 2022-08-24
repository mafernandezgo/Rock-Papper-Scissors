export default function Button(props) {
  return (
    <div
      className={`btnGame btn-${props.value}`}
      key={props.key}
      onClick={() => props.btnSelectedHandler(props.value)}
    >
      <button className="button">
        <img src={process.env.PUBLIC_URL + `/images/icon-${props.value}.svg`} />
      </button>
    </div>
  )
}
