import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            name = "profile"
            title = "Редактировать профиль"
            isOpen = {isOpen}
            onClose = {onClose}
        >
            <input
                id = "profile-name"
                className="form__input form__input_value_name"
                type="text"
                value=""
                name="name"
                tabIndex="1"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
            />
            <span className="profile-name-error form__error"></span>
            <input
                id = "profile-info"
                className="form__input form__input_value_info"
                type="text"
                value=""
                name="about"
                tabIndex="2"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
            />
            <span className="profile-info-error form__error"></span>
        </PopupWithForm>  
    )
}

export default EditProfilePopup;