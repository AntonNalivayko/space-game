import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import two from "../images/2.png";
import three from "../images/3.png";
import one from "../images/1.png";
import six from "../images/6.png";
import nine from "../images/9.png";
import seven from "../images/7.png";
import four from "../images/4.png";
import five from "../images/5.png";
import { Link } from "react-router-dom";

const LevelOne = () => {
  const [openCard, setopenCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [open, setOpen] = useState(true);
  const allId = [1, 2, 3, 4, 5, 6, 7, 9];
  const checkedCards = [...new Set(matched)];
  const pokemons = [
    { id: 2, name: two },
    { id: 3, name: three },
    { id: 1, name: one },
    { id: 6, name: six },
    { id: 9, name: nine },
    { id: 7, name: seven },
    { id: 4, name: four },
    { id: 5, name: five },
  ];
  const pokemons1 = [
    { id: 3, name: three },
    { id: 4, name: four },
    { id: 1, name: one },
    { id: 2, name: two },
    { id: 9, name: nine },
    { id: 5, name: five },
    { id: 6, name: six },
    { id: 7, name: seven },
  ];

  const pairOfPokemons = [...pokemons, ...pokemons1];

  useEffect(() => {
    const firstmatch = pairOfPokemons[openCard[0]];
    const secondmatch = pairOfPokemons[openCard[1]];

    if (secondmatch && firstmatch.id === secondmatch.id) {
      setMatched([...matched, firstmatch.id]);
    }
    if (openCard.length === 2) setTimeout(() => setopenCard([]), 1000);

    // if(matched.length >= 8) setOpen(true);

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
          <p className="title text-center mt-5" style={{ color: "#bbff33" }}>
            Great:)
          </p>
          <p className="modal-text text-left mt-3 mb-4">
            Let's see if you can handle the second level?;)
          </p>
          <Link to="leveltwo">
            <button className="next-btn"></button>
          </Link>
        </ModalBody>
      </Modal>

      {/* <Button onClick={()=> setOpen(true)}>dksfj</Button> */}
      <div className="app">
        <p className="title">easy level</p>
        <div className="flex-box">
          <div className="cards">
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

export default LevelOne;
