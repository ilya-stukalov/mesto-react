import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        name="edit-avatar"
        text="Обновить аватар">
        <fieldset className="form__main-info">
          <input className="form__item form__item_type_avatar" name="link" id="avatar-link-input" type="url" placeholder="Ссылка на картинку" required />
          <span className="form__item-error avatar-link-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        name="edit-profile"
        text="Редактировать профиль" >
        <fieldset className="form__main-info">
          <input className="form__item form__item_type_name" name="name" id="profile-name-input" type="text" placeholder="Название" required minLength="2" maxLength="40" />
          <span className="form__item-error profile-name-input-error"></span>
          <input className="form__item form__item_type_description" name="description" id="profile-description-input" type="text"
            placeholder="Описание" required minLength="2" maxLength="200" />
          <span className="form__item-error profile-description-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        text="Вы уверены?"
        formConfirm="form__confirm-text"
      />
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        name="edit-card"
        text="Новое место">
        <fieldset className="form__main-info">
          <input className="form__item form__item_type_name" name="name" type="text" id="place-name-input" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="form__item-error place-name-input-error"></span>
          <input className="form__item form__item_type_description" name="link" id="place-link-input" type="url"
            placeholder="Ссылка на картинку" required />
          <span className="form__item-error place-link-input-error"></span>
        </fieldset>
      </PopupWithForm>
      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
