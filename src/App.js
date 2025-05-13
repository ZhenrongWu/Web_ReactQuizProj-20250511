import React, { useState } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import WelcomeText from "./components/WelcomeText";
import CardsContainer from "./components/CardsContainer";
import EnterButton from "./components/EnterButton";

const App = () => {
  const [showCards, setShowCards] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const handleShowCards = () => {
    setShowCards(true);
  };

  const handleBack = () => {
    setShowCards(false);
    setShowOption(false);
  };

  return (
    <div className="app-container">
      <Header onBack={handleBack} />

      <div className="content">
        {showCards ? (
          <>
            <Logo />
            {!showOption && <WelcomeText />}
            <CardsContainer setShowOption={setShowOption} />
          </>
        ) : null}
      </div>

      <div className="footer">
        {!showCards && <EnterButton onClick={handleShowCards} />}
      </div>
    </div>
  );
};

export default App;
