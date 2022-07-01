import Map, { Popup } from "react-map-gl";

import { Flex, Image, Text } from "@chakra-ui/react";

import "./Mapbox.css";
import { PinMarker } from "./PinMarker";
import { KecamatanLayer } from "./KecamatanLayer";
import { KelurahanLayer } from "./KelurahanLayer";
import { RuasJalanLayer } from "./RuasJalanLayer";

const MapBox = ({
  BridgeResource,
  activeLayer,
  PopUpInfo,
  setPopUpInfo,
  setActivePopUp,
  activePopup,
  setViewPort,
  defaultViewPort,
}) => {
  const accessToken =
    "pk.eyJ1IjoibXJheWFuZGlrYTE1IiwiYSI6ImNsNTB3ZHlwdTBhMWkzcHBkbG1kaHI1cWQifQ.XhkECCffyFLhRrvj5oX-_A";

  return (
    <Flex w="100vw" h="100vh" position={"fixed"} inset="0">
      <Map
        {...defaultViewPort}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: "100%", height: "100%" }}
        mapboxAccessToken={accessToken}
        onClick={() => setActivePopUp(false)}
        onMove={(evt) => setViewPort(evt.originalEvent)}
      >
        {activePopup && (
          <Popup
            anchor="top"
            longitude={PopUpInfo?.geom?.coordinates[0]}
            latitude={PopUpInfo?.geom?.coordinates[1]}
            style={{ borderRadius: "250px" }}
            closeButton={false}
          >
            <Flex
              p="10px"
              w="fit-content"
              h="fit-content"
              flexDirection="column"
            >
              <Image src="./assets/images/placeholder.png" />

              <Flex gap="5px" color="#017E7A" fontWeight="semibold" pt="5px">
                <Image
                  w="25px"
                  h="18.03px"
                  src="./assets/icons/bridge_icons.png"
                />
                <Text>Jembatan</Text>
              </Flex>

              <Text fontSize="lg" fontWeight="semibold" py="9px">
                {PopUpInfo?.nama_jembatan}
              </Text>

              <Flex gap="15px" fontSize="xs">
                <Text>{PopUpInfo?.panjang} km</Text>
                <Text>{PopUpInfo?.lebar} km</Text>
              </Flex>
            </Flex>
          </Popup>
        )}

        <PinMarker
          resource={BridgeResource}
          active={activeLayer.bridge}
          setPopUpInfo={(value) => setPopUpInfo(value)}
          setViewPort={(value) => setViewPort(value)}
          setActivePopUp={(value) => setActivePopUp(value)}
        />
        <KecamatanLayer active={activeLayer.kecamatan} />
        <KelurahanLayer active={activeLayer.kelurahan} />
        <RuasJalanLayer active={activeLayer.jalan} />
      </Map>
    </Flex>
  );
};

export default MapBox;
