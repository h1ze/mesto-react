import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import ImagePopup from "./ImagePopup.js";
import Card from "./Card.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileData()
      .then((profileData) => {
        setCurrentUser(profileData);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });
  }, []);

    // React.useEffect(
    //     () => {
    //         Promise.all([api.getInitialCards(), api.getProfileData()])
    //             .then(([initialCards, profileData]) => {
    //                 // const userID = profileData._id;
    //                 setCurrentUser(profileData);
    //                 setCards(initialCards);
    //             })
    //             .catch((err) => {
    //                 console.log(err); // выведем ошибку в консоль
    //             });
    //     }, [])


  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardClick = (selectedCard) => setSelectedCard(selectedCard);
  
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper wrapper">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />
          <ImagePopup
            onClose={closeAllPopups}
            selectedCard={selectedCard} 
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
