
function ImagePopup(props) {

  return (
    <>
      <div className={`popup /* ${props.isOpen ? 'popup_opened' : ''} */`} id="popup-photo">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            onClick={props.onClose}></button>
          <img
            className="popup__img"
            src={props.card.link}
            alt="всплывающее фото" />
          <p className="popup__description"></p>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
