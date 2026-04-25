function card(props:any) {
  return (
    <div className="card">
      <img src={props.image}></img>
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Go Anywhere</button>
      </div>
    </div>
  );
}
export default card;