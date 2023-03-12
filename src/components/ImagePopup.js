function ImagePopup({isOpen, onClose}) {
    return(
        <div className="popup popup_menu_image popup_background_darkest">
        <div className="popup__container">
          <button className="popup__close btn-shut-image" type="button"></button>
          <div className="popup__holder-image">
            <figure className="popup__figure">
              <img className="popup__image" alt="" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
          </div>
        </div>
      </div>
    )
}

export default ImagePopup;