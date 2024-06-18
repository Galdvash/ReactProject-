import React,{useContext} from "react";
import useCardsApi from "../../hooks/useCardsHooks/useCardsApi";
import styleFindTheOne from "./FoundTheOne.module.css";
import Loading from "../Loading/Loading"; 
// import {UserContext} from "../../hooks/userContextApp";
import "./FindTheOne.css";

const FindTheOne = () => {
  const [cards,setCards ,loading, error] = useCardsApi();
  // const { userInformation } = useContext(UserContext);
  const handleLike = ()=>{

  }
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
                <p className={styleFindTheOne.p}>{card.subtitle}</p>
                <p className={styleFindTheOne.p}>{card.address.country}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindTheOne;
