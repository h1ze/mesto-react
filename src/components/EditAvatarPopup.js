import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
    return(
        <PopupWithForm
            name = "avatar"
            title = "Обновить аватар"
            isOpen = {isOpen}
            onClose = {onClose}
        >
            <input
                id = "profile-avatar"
                className="form__input form__input_value_avatar"
                type="url"
                value=""
                name="avatar"
                tabIndex="1"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="profile-avatar-error form__error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;