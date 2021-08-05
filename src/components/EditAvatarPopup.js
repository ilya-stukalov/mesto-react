import React from 'react';
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {

  const EditAvatarPopupRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      link: EditAvatarPopupRef.current.value,
    });
    EditAvatarPopupRef.current.value = '';
  }

  function handleClose() {
    props.onClose();
    EditAvatarPopupRef.current.value = '';
  }

  return (
    <PopupWithForm
      onClose={handleClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      name="edit-avatar"
      text="Обновить аватар">
      <fieldset className="form__main-info">
        <input
          className="form__item form__item_type_avatar"
          ref={EditAvatarPopupRef}
          name="link"
          id="avatar-link-input"
          type="url"
          placeholder="Ссылка на картинку"
          required />
        <span className="form__item-error avatar-link-input-error"></span>
      </fieldset>
    </PopupWithForm>
  )

}

export default EditAvatarPopup;
