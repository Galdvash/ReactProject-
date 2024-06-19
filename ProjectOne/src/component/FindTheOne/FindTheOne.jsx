import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useCardsApi from "../../hooks/useCardsHooks/useCardsApi";
import axios from "axios";
import styleFindTheOne from "./FoundTheOne.module.css";
import Loading from "../Loading/Loading";
import useGetUser from "../../hooks/UserHooks/useGetUser";

const FindTheOne = () => {
  const [cards, setCards, loading, error] = useCardsApi();
  const { userInformation } = useGetUser();

  useEffect(() => {
    const fetchLikedCards = async () => {
      if (userInformation) {
        try {
          const likedCards = cards.filter(card => card.likes.includes(userInformation._id));
          setCards(prevCards => prevCards.map(card => 
            likedCards.some(likedCard => likedCard._id === card._id) ? { ...card, liked: true } : card
          ));
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchLikedCards();
  }, [userInformation, cards, setCards]);

  const handleLike = async (cardId) => {
    const token = localStorage.getItem("token");
    try {
      const url = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardId}`;
      const config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url,
        headers: {
          'x-auth-token': token
        },
      };
      await axios(config);

      const updatedCards = cards.map(c => 
        c._id === cardId ? { ...c, liked: !c.liked } : c
      );
      setCards(updatedCards);

      const newLikedCardIds = updatedCards.filter(c => c.liked).map(c => c._id);
      localStorage.setItem("likedCards", JSON.stringify(newLikedCardIds));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cards || cards.length === 0) {
    return <div>No cards found</div>;
  }

  return (
    <div className="bodyFindTheOne">
      <div className={styleFindTheOne.container_cards}>
        <div className={styleFindTheOne.frontCard}>
          <h1>Cards</h1>
          <ul className={styleFindTheOne.listOfCards}>
            {cards.map((card) => (
              <li className={styleFindTheOne.item} key={card._id}>
                <img
                  className={styleFindTheOne.imgCards}
                  src={card.image.url}
                  alt={card.image.alt}
                />
                <h2>{card.title}</h2>
                <p className={styleFindTheOne.cardSubtitle}>{card.subtitle}</p>
                <p className={styleFindTheOne.cardDescription}>{card.description}</p>
                <p className={styleFindTheOne.countryName}>{card.address.country}</p>
                <div onClick={() => handleLike(card._id)}>
                  {card.liked ? (
                    <FavoriteIcon style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindTheOne;
  