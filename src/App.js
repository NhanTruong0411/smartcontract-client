import './App.css';
import GetStarted from "./Components/GetStarted.js"
import ConnectedProtocols from "./Components/ConnectedProtocols.js"
import FooterComp from "./Components/FooterComp.js"
import DearAll from './Components/DearAll';

function App() {
  return (
    <div>
      <DearAll/>
      <GetStarted />
      <ConnectedProtocols />
      <FooterComp />
    </div>
  );
}

export default App;
