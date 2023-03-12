import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(
        () => {
            Promise.all([api.getInitialCards(), api.getProfileData()])
                .then(([initialCards, profileData]) => {
                    // const userID = profileData._id;
                    setCards(initialCards);
                    setUserName(profileData.name);
                    setUserDescription(profileData.about);
                    setUserAvatar(profileData.avatar);
                })
                .catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                });
        }, [])

    return(
        <main>
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar">
                        <img
                            className="profile__image"
                            // style={{ backgroundImage: `url(${userAvatar})` }}
                            src={userAvatar} 
                            alt="Аватарка профиля"
                            />
                        <button 
                            className="profile__btn-image-edit"
                            onClick={onEditAvatar}
                            aria-label="Изменить аватарку"
                        ></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__text">
                            <h1 className="profile__title">{userName}</h1>
                            <button
                                className="profile__btn-edit"
                                type="button"
                                aria-label="Редактировать профиль"
                                onClick={onEditProfile}
                            ></button>
                            <p className="profile__subtitle">{userDescription}</p>
                        </div>
                    </div>
                </div>
                <button
                    className="profile__btn-add"
                    type="button"
                    aria-label="Добавить карточку"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map(card => Card(card, onCardClick))}
                </ul>
            </section>
        </main>
        )
};

export default Main;

