import "./App.css";
import Footer from "./components/Footer/Footer";
import MainCardContainer from "./components/MainCard/MainCardContainer";
import StartWindow from "./components/Windows/StartWindow";
import { useGameStore } from "./store/gameStore";
import PuaseTurnWindow from "./components/Windows/PuaseTurnWindow";
import StartTurnWindow from "./components/Windows/StartTurnWindow";
import Header2 from "./components/Header2/Header2";
import BugReportWindows from "./components/Windows/BugReportWindows";

function App() {
  const { statusGame } = useGameStore();

  return (
    <div className="flex h-dvh w-full flex-col">
      <Header2 />
      {statusGame === "notInitialized" && <StartWindow />}
      {statusGame === "pause" && <PuaseTurnWindow />}
      {statusGame === "prep" && <StartTurnWindow />}
      {statusGame === "bugReport" && <BugReportWindows />}

      <MainCardContainer />
      <Footer />
    </div>
  );
}

export default App;
