import { CurrentUserContext } from './../contexts/CurrentUserContext';

import React from 'react';


function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `element__trash-button ${isOwn ? 'element__trash-button_active' : 'element__trash-button_inactive'}`
  );

  const cardLikeButtonClassName = `element__button_active`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function onCardLike() {
    props.onCardLike(props.card);
  }

  function onCardDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <div
      className="element">
      <img className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick} />
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={onCardDelete}>
      </button>
      <div className="element__container">
        <h2 className="element__text">{props.card.name}</h2>
        <div className="element__like-group">
          <button
            className={`element__button ${isLiked ? cardLikeButtonClassName : ''}`}
            type="button"
            onClick={onCardLike}>

          </button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;