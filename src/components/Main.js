function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return(
        <main>
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar">
                        <img
                            className="profile__image"
                            src='<%=require("./images/kusto.jpg")%>'
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
                            <h1 className="profile__title">Жак-Ив Кусто</h1>
                            <button
                                className="profile__btn-edit"
                                type="button"
                                aria-label="Редактировать профиль"
                                onClick={onEditProfile}
                            ></button>
                            <p className="profile__subtitle">Исследователь океана</p>
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
                </ul>
            </section>
        </main>
        )
};

export default Main;

