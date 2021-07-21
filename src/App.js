import logo from './header-logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div 
          className="header__container">
          <img 
            className="header__logo" 
            src={logo} 
            alt="логотип" />
        </div>
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-overlay">
              <img className="profile__avatar" src="#" alt="аватар" />
              <button className="profile__button-avatar-change" src="#" alt="аватар"></button>
            </div>
            <div className="profile__container-text">
              <h1 className="profile__name">Жак-Ив-Кусто</h1>
              <button className="profile__edit-button button-call-popup" type="button"></button>
              <p className="profile__description">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__add-button button-call-popup" type="button"></button>
        </section>
        <div className="elements">
        </div>
      </main>
      <footer className="footer">
        <p className="footer__text">© 2020 Mesto Russia</p>
      </footer>
      <div className="popup" id="popup__edit-profile">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <div className="form">
            <h2 className="form__text">Редактировать профиль</h2>
            <form className="form__container profile-form" name="profile_form" noValidate>
              <fieldset className="form__main-info">
                <input className="form__item form__item_type_name" name="name" id="profile-name-input" type="text" placeholder="Название" required minLength="2" maxLength="40" />
                <span className="form__item-error profile-name-input-error"></span>
                <input className="form__item form__item_type_description" name="description" id="profile-description-input" type="text"
                        placeholder="Описание" required minLength="2" maxLength="200" />
                <span className="form__item-error profile-description-input-error"></span>
              </fieldset>
              <button className="form__button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
      <div className="popup" id="popup__edit-card">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <div className="form">
            <h2 className="form__text">Новое место</h2>
            <form className="form__container place-form" name="place_form" noValidate>
              <fieldset className="form__main-info">
                <input className="form__item form__item_type_name"  name="name" type="text" id="place-name-input" placeholder="Название" required minLength="2" maxLength="30" />
                <span className="form__item-error place-name-input-error"></span>
                <input className="form__item form__item_type_description" name="link" id="place-link-input" type="url"
                placeholder="Ссылка на картинку" required />
                <span className="form__item-error place-link-input-error"></span>
              </fieldset>
              <button className="form__button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
      <div className="popup" id="popup-photo">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <img className="popup__img" src="#" alt="всплывающее фото" />
          <p className="popup__description"></p>
        </div>
      </div>
      <div className="popup" id="popup__edit-avatar">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <div className="form">
            <h2 className="form__text">Обновить аватар</h2>
            <form className="form__container avatar-form" name="avatar_form" noValidate>
              <fieldset className="form__main-info">
                <input className="form__item form__item_type_avatar" name="link" id="avatar-link-input" type="url" placeholder="Ссылка на картинку" required />
                <span className="form__item-error avatar-link-input-error"></span>
              </fieldset>
              <button className="form__button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
      <div className="popup" id="popup__confirm">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <div className="form">
            <h2 className="form__text form__confirm-text">Вы уверены?</h2>
            <form className="form__container avatar-form" name="avatar_form" noValidate>
              <button className="form__button" type="submit">Да</button>
            </form>
          </div>
        </div>
      </div>
      <template id="cards">
        <div className="element">
          <img className="element__photo" />
          <button className="element__trash-button" type="button"></button>
          <div className="element__container">
            <h2 className="element__text"></h2>
            <div className="element__like-group">
              <button className="element__button" type="button"></button>
              <p className="element__like-counter">0</p>
            </div>
          </div>
        </div>
    </template>
    </div>
  );
}

export default App;
