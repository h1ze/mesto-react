import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            name = "card"
            title = "Новое место"
            isOpen = {isOpen}
            onClose = {onClose}
        >
            <input
                id="card-title"
                className="form__input form__input_value_title"
                type="text"
                value=""
                name="name"
                tabIndex="1"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
            />
            <span className="card-title-error form__error"></span>
            <input
                id="card-url"
                className="form__input form__input_value_link"
                type="url"
                value=""
                name="link"
                tabIndex="2"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="card-url-error form__error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;