import './App.css';
import GetStarted from "./Components/GetStarted.js"
import ConnectedProtocols from "./Components/ConnectedProtocols.js"
import FooterComp from "./Components/FooterComp.js"
import DearAll from './Components/DearAll';
import IdeaCore from './Components/IdeaCore';

function App() {
  return (
    <div>
      <DearAll/>
      <IdeaCore/>
      <GetStarted />
      <ConnectedProtocols />
      <FooterComp />
    </div>
  );
}

export default App;
