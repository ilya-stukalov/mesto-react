
function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} id={`popup__${props.name}`}>
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            onClick={props.onClose}></button>
          <div className="form">
            <h2 className={`form__text ${props.formConfirm}`}>{props.text}</h2>
            <form onSubmit={props.onSubmit} className="form__container" name={`popup__${props.name}`}>
              {props.children}
              <button className="form__button" type="submit">{props.name === "confirm" ? "Да" : "Сохранить"}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
