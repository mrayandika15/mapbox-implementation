import { useEffect, useState } from "react";
import { Layer, Source } from "react-map-gl";

import { getKelurahan } from "../../services";
import { layerKelurahan, LineLayerKelurahan } from "../../utils/LayerStyle";
import { restuctureMapGeo } from "../../utils/mapGeoConverter";

export const KelurahanLayer = ({ active }) => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    (async () => {
      const kelurahanRes = await getKelurahan();

      setResource(kelurahanRes?.list_desa_kelurahan);
    })();
  }, []);

  const geoJson = restuctureMapGeo(resource);

  return (
    <>
      {active ? (
        <Source id="data-keluahan" data={geoJson} type="geojson">
          <Layer {...layerKelurahan} />
          <Layer {...LineLayerKelurahan} />
        </Source>
      ) : null}
    </>
  );
};
