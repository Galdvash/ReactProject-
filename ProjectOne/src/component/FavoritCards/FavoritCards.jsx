import React, { useEffect, useState } from "react";
import useGetUser from "../../hooks/UserHooks/useGetUser";
import useCardsApi from "../../hooks/useCardsHooks/useCardsApi";
import styleFavCards from "./FavoritCards.module.css";

const FavoritCards = () => {
  const { userInformation } = useGetUser();
  const [cards, , loading, error] = useCardsApi();
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    if (userInformation && cards.length > 0) {
      const filteredFavoriteCards = cards.filter(card => card.likes.includes(userInformation._id));
      setFavoriteCards(filteredFavoriteCards);
    }
  }, [userInformation, cards]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!favoriteCards || favoriteCards.length === 0) {
    return <div>No favorite cards found</div>;
  }

  return (
    <div className="bodyCards">
      <div className={styleFavCards.container_cards}>
          <h1 className={styleFavCards.stickTitle}>Favorite Cards</h1>
        <div className={styleFavCards.frontCard}>
          <ul className={styleFavCards.listOfCards}>
            {favoriteCards.map((card) => (
              <li className={styleFavCards.item} key={card._id}>
                <img
                  className={styleFavCards.imgCards}
                  src={card.image.url}
                  alt={card.image.alt}
                />
                <h2 className={styleFavCards.title}>{card.title}</h2>
                <p className={styleFavCards.cardSubtitle}>{card.subtitle}</p>
                <p className={styleFavCards.cardDescription}>{card.description}</p>
                <p className={styleFavCards.countryName}>{card.address.country}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FavoritCards;
