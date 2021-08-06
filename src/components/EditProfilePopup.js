import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from './../contexts/CurrentUserContext';

function EditProfilePopup({ onUpdateUser, onClose, isOpen }) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    // Обработчик изменения инпута обновляет стейт
    function handleChange(e) {
        if (e.target.name === "name") {
            setName(e.target.value);
        }
        else setDescription(e.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    function handleClose() {
        onClose();
        setName(currentUser.name);
        setDescription(currentUser.about);
    }
    
    return (
        <PopupWithForm
            onClose={handleClose}
            isOpen={isOpen}
            name="edit-profile"
            text="Редактировать профиль"
            onSubmit={handleSubmit}
            buttonName="Сохранить">
            <fieldset className="form__main-info">
                <input
                    className="form__item form__item_type_name"
                    name="name"
                    value={name || ''}
                    onChange={handleChange}
                    id="profile-name-input"
                    type="text"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="40" />
                <span className="form__item-error profile-name-input-error"></span>
                <input
                    className="form__item form__item_type_description"
                    name="description"
                    value={description || ''}
                    onChange={handleChange}
                    id="profile-description-input"
                    type="text"
                    placeholder="Описание"
                    required
                    minLength="2"
                    maxLength="200" />
                <span className="form__item-error profile-description-input-error"></span>
            </fieldset>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
