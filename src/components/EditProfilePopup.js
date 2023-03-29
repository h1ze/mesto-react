import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({isOpen, onClose}) {

    const [profileName, setProfileName] = React.useState('');
    const [profileDescription, setProfileDescription] = React.useState('');

    const handleProfileNameInputChange = (e) => {
        // установите нужное состояние
        // используйте e.target.name и e.target.value
        // [e.target.name]:  e.target.value
        setProfileName(e.target.value);
    }

    const handleProfileDescriptionInputChange = (e) => {
        // установите нужное состояние
        // используйте e.target.name и e.target.value
        setProfileDescription(e.target.value);
    }

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
                value={profileName}
                name="name"
                tabIndex="1"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
                onChange={handleProfileNameInputChange}
            />
            <span className="profile-name-error form__error"></span>
            <input
                id = "profile-info"
                className="form__input form__input_value_info"
                type="text"
                value={profileDescription}
                name="about"
                tabIndex="2"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
                onChange={handleProfileDescriptionInputChange}
            />
            <span className="profile-info-error form__error"></span>
        </PopupWithForm>  
    )
}

export default EditProfilePopup;