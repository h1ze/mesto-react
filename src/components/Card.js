function Card(card, onCardClick) {

    const handleClick = () => {
       onCardClick(card);
       console.log(card);
    }  

    return(
        <li className="element">
            <img
                alt={card.name}
                className="element__image"
                src={card.link}
                onClick={handleClick}
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
}

export default Card;