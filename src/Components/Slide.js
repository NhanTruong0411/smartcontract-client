import { React } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Slide() {
  return (
    <div className="row m-0 bg-gay w-100">
      <div className="bg-gray-200 p-5">
        <h1 className="text-4xl font-bold py-5 text-center mb-10">Road Map</h1>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div className="col-md-12 justify-center">
              <h5 className="font-bold text-center text-5xl text-gray-500 px-4">
                May 2021
              </h5>
              <br></br>
              <p className="text-center text-black">
                Launch of PEAKDEFI wallet app for iOS and Androi
              </p>
              <p className="text-center text-black">
                A non-custody DeFi mobile app with integrated DEX.
              </p>
            </div>
          </Item>
          <Item>
            <div className="col-md-12 justify-center">
              <h5 className="font-bold text-center text-5xl text-gray-500 px-4">
                August 2020
              </h5>
              <br></br>
              <p className="text-center text-black">
                Launch of PEAKDEFI wallet app for iOS and Androi
              </p>
              <p className="text-center text-black">
                A non-custody DeFi mobile app with integrated DEX.
              </p>
            </div>
          </Item>
          <Item>
            <div className="col-md-12 justify-center">
              <h5 className="font-bold text-center text-5xl text-gray-500 px-4">
                December 2020
              </h5>
              <br></br>
              <p className="text-center text-black">
              Launch of PEAKDEFI fund protocol
              </p>
              <p className="text-center text-black">
              Permissionless and performance-based DeFi Fund with integrated PEAK staking audited by Quantstamp
              </p>
            </div>
          </Item>
          <Item>
            <div className="col-md-12 justify-center">
              <h5 className="font-bold text-center text-5xl text-gray-500 px-4">
                February 2021
              </h5>
              <br></br>
              <p className="text-center text-black">
              Integration to order Crypto Credit Card from over 100 countries via PEAKDEFI wallet app.              </p>
              
            </div>
          </Item>
          <Item>
            <div className="col-md-12 justify-center">
              <h5 className="font-bold text-center text-5xl text-gray-500 px-4">
                March 2021
              </h5>
              <br></br>
              <p className="text-center text-black">
              Start of yield farming for liquidity providers for the PEAK token.
              </p>
              
            </div>
          </Item>
          <Item>
            <div className="col-md-12 justify-center">
              <h5 className="font-bold text-center text-5xl text-gray-500 px-4">
                May 2021
              </h5>
              <br></br>
              <p className="text-center text-black">
              PEAKDEFI v2 update: Integration of "Protection Minting" to cover fund losses on the PEAKDEFI fund.
              </p>
              
            </div>
          </Item>
          <Item>
            <div className="col-md-12 justify-center">
              <h5 className="font-bold text-center text-5xl text-gray-500 px-4">
                July 2021
              </h5>
              <br></br>
              <p className="text-center text-black">
              Implementation of "Earn" section to offer decentralized yielding, staking and lending options on the PEAKDEFI wallet app.
              </p>
              
            </div>
          </Item>
          
        </Carousel>
      </div>
    </div>
  );
}
