export const restuctureMapGeo = (value) => {
  const valueMapping = value.map((data) => {
    return {
      type: "Feature",
      geometry: {
        type: data?.geom?.type,
        coordinates: data?.geom?.coordinates,
      },
    };
  });

  return {
    type: "FeatureCollection",
    features: [...valueMapping],
  };
};
