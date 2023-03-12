import React from "react";
import api from "../utils/Api.js";


function Main({onEditProfile, onAddPlace, onEditAvatar}) {
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
                    // cardsListSection.renderItems(initialCards);
                })
                .catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                });
        }
    )

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
                    {cards.map((card) => {
                        return (
                            <li className="element">
                                <img
                                    alt={card.name}
                                    className="element__image"
                                    src={card.link}
                                />
                                <button
                                    className="element__button-delete"
                                    type="button"
                                    aria-label="Удалить"
                                ></button>
                                <div className="element__text">
                                    <h2 className="element__title">{card.name}</h2>
                                    <div className="element__block-like">
                                        <button
                                            className="element__button-like"
                                            type="button"
                                            aria-label="Лайкнуть"
                                        ></button>
                                        <span className="element__counter-like">{card.likes.length}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
        )
};

export default Main;

