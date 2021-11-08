import React, { useState, useEffect } from "react";
import { Modal, ModalBody, } from "reactstrap";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";
import four from "../img/4.png";
import five from "../img/5.png";
import six from "../img/6.png";
import seven from "../img/7.png";
import eath from "../img/8.png";
import nine from "../img/9.png";
import ten from "../img/10.png";
import eleven from "../img/11.png";
import tweven from "../img/12.png";
import stars from "../img/stars.png";
import { Link } from "react-router-dom";

const LevelTwo = () => {
  const [openCard, setopenCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [open, setOpen] = useState(false);

  const allId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const checkedCards = [...new Set(matched)];

  const pokemons = [
    { id: 11, name: eleven },
    { id: 2, name: two },
    { id: 3, name: three },
    { id: 12, name: tweven },
    { id: 1, name: one },
    { id: 10, name: ten },
    { id: 9, name: nine },
    { id: 4, name: four },
    { id: 7, name: seven },
    { id: 6, name: six },
    { id: 8, name: eath },
    { id: 5, name: five },
  ];
  const pokemons1 = [
    { id: 10, name: ten },
    { id: 3, name: three },
    { id: 4, name: four },
    { id: 12, name: tweven },
    { id: 1, name: one },
    { id: 2, name: two },
    { id: 9, name: nine },
    { id: 5, name: five },
    { id: 11, name: eleven },
    { id: 6, name: six },
    { id: 7, name: seven },
    { id: 8, name: eath },
  ];

  const pairOfPokemons = [...pokemons, ...pokemons1];

  useEffect(() => {
    const firstmatch = pairOfPokemons[openCard[0]];
    const secondmatch = pairOfPokemons[openCard[1]];

    if (secondmatch && firstmatch.id === secondmatch.id) {
      setMatched([...matched, firstmatch.id]);
    }
    if (openCard.length === 2) setTimeout(() => setopenCard([]), 1000);

    if (checkedCards.sort().join(",") === allId.sort().join(",")) {
      console.log("same members");
      setOpen(true);
    } else console.log("not a match");

    console.log({ matched });
  }, [openCard]);

  const handleFlip = (index) => {
    setopenCard((opened) => [...opened, index]);
  };

  return (
    <div className="app-box">
      <Modal
        isOpen={open}
        toggle={() => setOpen(false)}
        className="special_modal"
      >
        <ModalBody
          className="modal-body text-center"
          style={{ height: 500, textAlign: "center" }}
        >
          <p className="title text-center mt-5 " style={{ color: "#bbff33" }}>
            Congratulations!
          </p>
          <p className="modal-text text-left mt-3 mb-2">
            You have completed all the levels of this game! You have a strong
            memory!
          </p>
          <div className="stars">
            <img src={stars} />
          </div>
        </ModalBody>
      </Modal>
      <div className="app">
        <p className="title">Hard level</p>
        <div className="flex-box">
          <div className="cards-three">
            {pairOfPokemons.map((pokemon, index) => {
              let flipCard;
              flipCard = false;

              if (openCard.includes(index)) flipCard = true;

              if (matched.includes(pokemon.id)) flipCard = true;

              return (
                <div
                  className={`pokemon-card ${flipCard ? "flipped" : ""}`}
                  key={index}
                  onClick={() => handleFlip(index)}
                >
                  <div className="inner">
                    <div className="front" style={{ borderRadius: 10 }}>
                      <img
                        src={pokemon.name}
                        alt="pokemon"
                        className="img-card"
                        style={{ borderRadius: 10 }}
                      />
                    </div>
                    <div className="back"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelTwo;
