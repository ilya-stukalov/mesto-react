
function Card(props) {

function handleClick() {
  props.onCardClick(props.card);
}

  return (
    <div
      className="element">
      <img className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick} />
      <button className="element__trash-button" type="button"></button>
      <div className="element__container">
        <h2 className="element__text">{props.card.name}</h2>
        <div className="element__like-group">
          <button className="element__button" type="button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;