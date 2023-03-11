import Header from "./Header.js";


function App() {
  return (
    <div className="page">
      <div className="page__wrapper wrapper">
        <Header />
        <main>
        <section className="profile">
          <div className="profile__content">
            <div className="profile__avatar">
              <img
              className="profile__image"
              src='<%=require("./images/kusto.jpg")%>'
              alt="Аватарка профиля"
              />
            <button className="profile__btn-image-edit"></button>
            </div>
            <div className="profile__info">
              <div className="profile__text">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button
                  className="profile__btn-edit"
                  type="button"
                  aria-label="Редактировать профиль"
                ></button>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
            </div>
          </div>
          <button
            className="profile__btn-add"
            type="button"
            aria-label="Добавление профиля"
          ></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
        </main>
        <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
      <div className="popup popup_menu_profile">
        <div className="popup__container">
          <button className="popup__close btn-shut-profile" type="button"></button>
          <div className="popup__content">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form form" name="profile-form">
              <input
                id = "profile-name"
                className="form__input form__input_value_name"
                type="text"
                value=""
                name="name"
                tabindex="1"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required
                />
              <span className="profile-name-error form__error"></span>
              <input
                id = "profile-info"
                className="form__input form__input_value_info"
                type="text"
                value=""
                name="about"
                tabindex="2"
                placeholder="О себе"
                minlength="2"
                maxlength="200"
                required
                />
              <span className="profile-info-error form__error"></span>
              <button
                className="form__button profile-submit"
                type="submit" tabindex="3"
              >Сохранить</button>
            </form>
          </div>
        </div>
      </div>
      <div className="popup popup_menu_card">
        <div className="popup__container">
          <button className="popup__close btn-shut-card" type="button"></button>
          <div className="popup__content">
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form form" name="card-form">
              <input
                id="card-title"
                className="form__input form__input_value_title"
                type="text"
                value=""
                name="name"
                tabindex="1"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
                />
              <span className="card-title-error form__error"></span>
              <input
                id="card-url"
                className="form__input form__input_value_link"
                type="url"
                value=""
                name="link"
                tabindex="2"
                placeholder="Ссылка на картинку"
                required
                />
              <span className="card-url-error form__error"></span>
              <button
                className="form__button card-submit"
                type="submit" tabindex="3"
              >Сохранить</button>
            </form>
          </div>
        </div>
      </div>
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
      <div className="popup popup_menu_delete">
        <div className="popup__container">
          <button className="popup__close btn-shut-delete" type="button"></button>
          <div className="popup__content">
            <h2 className="popup__title popup__title_type_confirmation">Вы уверены?</h2>
            <form className="popup__form form" name="delete-form">
              <button
                className="form__button form__button_type_confirmation delete-submit"
                type="submit" tabindex="1"
              >Да</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="popup popup_menu_avatar">
      <div className="popup__container">
        <button className="popup__close btn-shut-avatar" type="button"></button>
        <div className="popup__content">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form form" name="avatar-form">
            <input
              id = "profile-avatar"
              className="form__input form__input_value_avatar"
              type="url"
              value=""
              name="avatar"
              tabindex="1"
              placeholder="Ссылка на картинку"
              required
              />
            <span className="profile-avatar-error form__error"></span>
            <button
              className="form__button avatar-submit"
              type="submit" tabindex="2"
            >Сохранить</button>
          </form>
        </div>
      </div>
    </div>
    <template id="card">
      <li className="element">
        <img
          alt="Изображение карточки"
          className="element__image"
        />
        <button
          className="element__button-delete"
          type="button"
          aria-label="Удалить"
        ></button>
        <div className="element__text">
          <h2 className="element__title"></h2>
          <div className="element__block-like">
            <button
              className="element__button-like"
              type="button"
              aria-label="Лайкнуть"
            ></button>
            <span className="element__counter-like"></span>
          </div>
        </div>
      </li>
    </template>
    </div>
  );
}

export default App;
