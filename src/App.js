import React, { useState } from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import WelcomeText from "./components/WelcomeText";
import CardsContainer from "./components/CardsContainer";
import EnterButton from "./components/EnterButton";

const App = () => {
  const [showCards, setShowCards] = useState(false);

  const handleShowCards = () => {
    setShowCards(true);
  };

  const handleBack = () => {
    setShowCards(false);
  };

  return (
    <div className="app-container">
      <Header onBack={handleBack} />

      <div className="content">
        {showCards ? (
          <>
            <Logo />
            <WelcomeText />
            <CardsContainer />
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
