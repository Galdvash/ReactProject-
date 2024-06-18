import React,{useContext} from "react";
import useCardsApi from "../../hooks/useCardsHooks/useCardsApi";
import useAddCards from "./AddCard/useAddCards";
import Loading from "../Loading/Loading";
import FormComponent from "./AddCard/FormComponent";
import styleCards from "./Cards.module.css";


const Cards = () => {

  const [cards,setCards,loading, error] = useCardsApi();
  const { isClick, handleChange, handleSubmit, formValid, formData, closeForm, OpenAndCloseCard } = useAddCards();
console.log(cards);
  const addCardToList = (newCard) => {
    setCards((prevCards) => [newCard, ...prevCards]);
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
    <div>
      <div className="bodyCards">
        <div className={styleCards.container_cards}>
          <div className={styleCards.frontCard}>
            <h1>Cards</h1>
            <ul className={styleCards.listOfCards}>
              {cards.slice(0, 3).map((card) => (
                <li className={styleCards.item} key={card._id}>
                  <img
                    className={styleCards.imgCards}
                    src={card.image.url}
                    alt={card.image.alt}
                  />
                  <h2>{card.title}</h2>
                  <p className={styleCards.p}>{card.subtitle}</p>
                  <p className={styleCards.p}>{card.address.country}</p>
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

export default Cards;
