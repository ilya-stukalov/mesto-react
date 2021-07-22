import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

  const [isEditAvatarPopupOpen, SetEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, SetAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, SetEditProfilePopupOpen] = React.useState(false);
  const [isImagePopupOpen, SetImagePopupOpen] = React.useState(false);
  const [selectedCard, SetSelectedCard] = React.useState({});


  function handleCardClick(card) {
    SetImagePopupOpen(true);
    SetSelectedCard(card);
  }

  function handleEditAvatarClick() {
    SetEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    SetEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    SetAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    SetEditProfilePopupOpen(false);
    SetEditAvatarPopupOpen(false);
    SetAddPlacePopupOpen(false);
    SetImagePopupOpen(false);
  }

  return (
    <div className="App">
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
