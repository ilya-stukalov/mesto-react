import React, { useEffect } from 'react';
import { api } from './../utils/api.js'
import Card from './Card.js'

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-overlay">
            <img
              className="profile__avatar"
              src={userAvatar}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button button-call-popup"
              type="button">
            </button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button button-call-popup"
          type="button">
        </button>
      </section>
      <div className="elements">
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick} />)
        )}
      </div>
    </main>
  );
}

export default Main;


