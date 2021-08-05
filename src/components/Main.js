import React from 'react';
import Card from './Card.js';

import { CurrentUserContext } from './../contexts/CurrentUserContext';


function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-overlay">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="аватар"
            />
            <button
              onClick={props.onEditAvatar}
              className="profile__button-avatar-change"
              src="#"
              alt="аватар">
            </button>
          </div>
          <div className="profile__container-text">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button button-call-popup"
              type="button">
            </button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button button-call-popup"
          type="button">
        </button>
      </section>
      <div className="elements">
        {props.cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />)
        )}
      </div>
    </main>
  );
}

export default Main;


