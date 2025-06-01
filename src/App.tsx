import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainCardContainer from "./components/MainCard/MainCardContainer";
import StartWindow from "./components/Windows/StartWindow";
import { useGameStore } from "./store/gameStore";
import PuaseTurnWindow from "./components/Windows/PuaseTurnWindow";
import StartTurnWindow from "./components/Windows/StartTurnWindow";

function App() {
  const { statusGame } = useGameStore();

  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      {statusGame === "notInitialized" && <StartWindow />}
      {statusGame === "pause" && <PuaseTurnWindow />}
      {statusGame === "prep" && <StartTurnWindow />}

      <MainCardContainer />
      <Footer />
    </div>
  );
}

export default App;
