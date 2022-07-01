import { Marker } from "react-map-gl";
import { Pin } from "../../components";

export const PinMarker = ({
  resource,
  active,
  setPopUpInfo,
  setViewPort,
  setActivePopUp,
}) => {
  const handlePin = (e, value) => {
    e.originalEvent.stopPropagation();

    setPopUpInfo(value);
    setActivePopUp(true);
    setViewPort((prevState) => ({
      ...prevState,
      latitude: value?.geom?.coordinates[1],
      longitude: value?.geom?.coordinates[0],
      zoom: 12,
    }));
  };

  return (
    <>
      {active
        ? resource?.map((data, index) => (
            <Marker
              key={`marker-${index}`}
              latitude={data?.geom?.coordinates[1]}
              longitude={data?.geom?.coordinates[0]}
              onClick={(e) => handlePin(e, data)}
            >
              <Pin />
            </Marker>
          ))
        : null}
    </>
  );
};
