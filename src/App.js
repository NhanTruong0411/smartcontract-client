import './App.css';
import GetStarted from "./Components/GetStarted.js"
import ConnectedProtocols from "./Components/ConnectedProtocols.js"
import FooterComp from "./Components/FooterComp.js"
import DearAll from './Components/DearAll';
import IdeaCore from './Components/IdeaCore';
import SaleOff from './Components/SaleOff'
import StepGetMoney from './Components/StepGetMoney'
// import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/Info_carousel/SliderData';
import Slide from './Components/Slide.js';

function App() {
  return (
    <div>
      <DearAll/>
      <IdeaCore/>
      <SaleOff/>
      <StepGetMoney/>
      <Slide/>
      {/* <ImageSlider slides={SliderData} /> */}
      <GetStarted />
      <ConnectedProtocols />
      <FooterComp />
    </div>
  );
}

export default App;
