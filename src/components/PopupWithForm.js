function PopupWithForm({name, title, children, onClose, isOpen}) {
    const popupStatus = isOpen ? "popup_opened" : "";
    return(
        <div className={`${popupStatus} popup popup_menu_${name}`}>
            <div className="popup__container">
                <button 
                    className="popup__close" 
                    type="button"
                    onClick={onClose}
                ></button>
                <div className="popup__content">
                    <h2 className="popup__title">{title}</h2>
                    <form className="popup__form form" name={`${name}-form`}>
                        {children}
                        <button
                            className={`form__button ${name}-submit`}
                            type="submit"
                        >Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PopupWithForm;