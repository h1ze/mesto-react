function PopupWithForm({name, title, children, handleCloseClick}) {
    return(
        <div className={`popup popup_menu_${name}`}>
            <div className="popup__container">
                <button 
                    className="popup__close" 
                    type="button"
                    onClick={handleCloseClick}
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