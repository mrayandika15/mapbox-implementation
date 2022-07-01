import { useEffect, useState } from "react";
import {
  BottomController,
  MapBox,
  SearchSection,
  SideController,
} from "./containers";

import { getBridge } from "./services";

import "mapbox-gl/dist/mapbox-gl.css";

import React from "react";
import { ViewController } from "./components";

function App() {
  const [BridgeResource, setBridgeResource] = useState([]);

  const [defaultViewPort, setViewPort] = useState({
    longitude: 107.71960000000007,
    latitude: -6.946899999999971,
    zoom: 12,
  });

  const [activeLayer, setActiveLayer] = useState({
    kelurahan: true,
    kecamatan: true,
    bridge: true,
    jalan: true,
  });

  const [PopUpInfo, setPopUpInfo] = useState(null);
  const [activePopup, setActivePopUp] = useState(false);

  const [ToggleResult, setToggleResult] = useState(false);

  useEffect(() => {
    (async () => {
      const bridgeRes = await getBridge();

      setBridgeResource(bridgeRes?.jembatan);
    })();
  }, []);

  return (
    <>
      <MapBox
        BridgeResource={BridgeResource}
        activeLayer={activeLayer}
        setPopUpInfo={(value) => setPopUpInfo(value)}
        PopUpInfo={PopUpInfo}
        activePopup={activePopup}
        setActivePopUp={(value) => setActivePopUp(value)}
        defaultViewPort={defaultViewPort}
        setViewPort={(value) => setViewPort(value)}
      />
      <SearchSection
        setToggleResult={(value) => setToggleResult(value)}
        ToggleResult={ToggleResult}
        setActivePopUp={(value) => setActivePopUp(value)}
        setPopUpInfo={(value) => setPopUpInfo(value)}
        setViewPort={(value) => setViewPort(value)}
      />
      <SideController
        setViewPort={(value) => setViewPort(value)}
        defaultViewPort={defaultViewPort}
      />
      <BottomController />
      <ViewController
        activeLayer={activeLayer}
        setActiveLayer={(value) => setActiveLayer(value)}
      />
    </>
  );
}

export default App;
