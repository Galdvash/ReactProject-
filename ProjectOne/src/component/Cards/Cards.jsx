import React, { useEffect, useState } from "react";
import axios from "axios";
import useGetUser from "../../hooks/UserHooks/useGetUser"; // Corrected the path
import Loading from "../Loading/Loading";
import FormComponent from "./AddCard/FormComponent";
import styleCards from "./Cards.module.css";
import useAddCards from "./AddCard/useAddCards";

const MyCards = () => {
  const [cards, setCards] = useState([]);
  const { userInformation } = useGetUser(); // Destructure userInformation
  const { isClick, handleChange, handleSubmit, formValid, formData, closeForm, OpenAndCloseCard } = useAddCards();

  useEffect(() => {
    const fetchCards = async () => {
      if (userInformation) {
        try {
          const response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
          const userCards = response.data.filter(card => card.user_id === userInformation._id);
          setCards(userCards);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchCards();
  }, [userInformation]);

  const addCardToList = (newCard) => {
    setCards((prevCards) => [newCard, ...prevCards]);
  };

  if (!userInformation || !cards) {
    return <Loading />;
  }

  if (cards.length === 0) {
    return <div>No cards found</div>;
  }

  return (
    <div>
      <div className="bodyCards">
        <div className={styleCards.container_cards}>
          <div className={styleCards.frontCard}>
            <h1>My Cards</h1>
            <br></br>
            <ul className={styleCards.listOfCards}>
              {cards.map((card) => (
                <li className={styleCards.item} key={card._id}>
                  <img
                    className={styleCards.imgCards}
                    src={card.image.url}
                    alt={card.image.alt}
                  />
                  <h2 className={styleCards.title}>{card.title}</h2>
                  <p className={styleCards.cardSubtitle}>{card.subtitle}</p>
                  <p className={styleCards.countryName}>{card.address.country}</p>
                  <p className={styleCards.cardDescription}>{card.description}</p>
                </li>
              ))}
            </ul>
            <button onClick={OpenAndCloseCard}>+</button>
            {isClick && (
              <FormComponent
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formValid={formValid}
                formData={formData}
                closeForm={closeForm}
                addCardToList={addCardToList}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
