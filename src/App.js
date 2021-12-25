import './App.css';
import GetStarted from "./Components/GetStarted.js"
import ConnectedProtocols from "./Components/ConnectedProtocols.js"
import FooterComp from "./Components/FooterComp.js"
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/Info_carousel/SliderData';
import Slide from './Components/Slide.js';

function App() {
  
  return (
    <div>
      <Slide/>
      <ImageSlider slides={SliderData} />
      <GetStarted />
      <ConnectedProtocols />
      <FooterComp />
      
    </div>
  );
}

export default App;
