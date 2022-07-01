import { useEffect, useState } from "react";
import { Layer, Source } from "react-map-gl";
import { getKecamatan } from "../../services";
import { layerKecamatan, lineLayerKecamatan } from "../../utils/LayerStyle";
import { restuctureMapGeo } from "../../utils/mapGeoConverter";

export const KecamatanLayer = ({ active }) => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    (async () => {
      const kecamatanRes = await getKecamatan();
      setResource(kecamatanRes?.list_kecamatan);
    })();
  }, []);

  const geoMap = restuctureMapGeo(resource);

  return (
    <>
      {active ? (
        <Source id="my-data" type="geojson" data={geoMap}>
          <Layer {...layerKecamatan} />
          <Layer {...lineLayerKecamatan} />
        </Source>
      ) : null}
    </>
  );
};
