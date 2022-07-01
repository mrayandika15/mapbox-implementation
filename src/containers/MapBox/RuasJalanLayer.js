import { useEffect, useState } from "react";
import { Layer, Source } from "react-map-gl";
import { searchRuasJalan } from "../../services";

import { restuctureMapGeo } from "../../utils/mapGeoConverter";

import {
  layerRuasJalanAP,
  layerRuasJalanAS,
  layerRuasJalanKP,
  layerRuasJalanKP2,
  layerRuasJalanLP,
} from "../../utils/LayerStyle";

export const RuasJalanLayer = ({ active }) => {
  const [RuasJalanLP, setRuasJalanLP] = useState([]);

  const [RuasJalanAP, setRuasJalanAP] = useState([]);

  const [RuasJalanKP, setRuasJalanKP] = useState([]);

  const [RuasJalanKP2, setRuasJalanKP2] = useState([]);

  const [RuasJalanAS, setRuasJalanAS] = useState([]);

  useEffect(() => {
    (async () => {
      const LPres1 = await searchRuasJalan("LP-1");
      const LPres2 = await searchRuasJalan("LP-2");
      const LPres3 = await searchRuasJalan("LP-3");

      const APres = await searchRuasJalan("AP");
      const APres1 = await searchRuasJalan("AP-1");

      const KPres1 = await searchRuasJalan("KP-1,2");

      const KPres2 = await searchRuasJalan("KP-4");

      const ASres = await searchRuasJalan("AS-1");
      const ASres3 = await searchRuasJalan("AS-3");
      const KSres = await searchRuasJalan("KS-1");
      const KSres2 = await searchRuasJalan("KS-2");
      const LSres = await searchRuasJalan("LS-1");
      const LSres2 = await searchRuasJalan("LS-2");

      setRuasJalanAS(
        RuasJalanAS.concat(
          ASres?.ruas_jalan,
          ASres3?.ruas_jalan,
          KSres?.ruas_jalan,
          KSres2?.ruas_jalan,
          LSres?.ruas_jalan,
          LSres2?.ruas_jalan
        )
      );

      // KP 1,2
      setRuasJalanKP(KPres1?.ruas_jalan);

      // KP 3,4
      setRuasJalanKP2(KPres2?.ruas_jalan);

      // AP

      setRuasJalanAP(RuasJalanAP.concat(APres?.ruas_jalan, APres1?.ruas_jalan));

      // LP

      setRuasJalanLP(
        RuasJalanLP.concat(
          LPres1?.ruas_jalan,
          LPres2?.ruas_jalan,
          LPres3?.ruas_jalan
        )
      );
    })();
  }, []);

  const geoJsonLP = restuctureMapGeo(RuasJalanLP);

  const geoJsonAP = restuctureMapGeo(RuasJalanAP);

  const geoJsonKP = restuctureMapGeo(RuasJalanKP);

  const geoJsonKP2 = restuctureMapGeo(RuasJalanKP2);

  const geoJsonAS = restuctureMapGeo(RuasJalanAS);

  return (
    <>
      {active ? (
        <>
          <Source id="data-jalanLP" data={geoJsonLP} type="geojson">
            <Layer {...layerRuasJalanLP} />
          </Source>
          <Source id="data-jalanAP" data={geoJsonAP} type="geojson">
            <Layer {...layerRuasJalanAP} />
          </Source>
          <Source id="data-jalanKP" data={geoJsonKP} type="geojson">
            <Layer {...layerRuasJalanKP} />
          </Source>
          <Source id="data-jalanKP2" data={geoJsonKP2} type="geojson">
            <Layer {...layerRuasJalanKP2} />
          </Source>
          <Source id="data-jalanAS" data={geoJsonAS} type="geojson">
            <Layer {...layerRuasJalanAS} />
          </Source>
        </>
      ) : null}
    </>
  );
};
