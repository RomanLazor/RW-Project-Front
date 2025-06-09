import React, { useState, useRef, useEffect } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const center = { lat: 48.3794, lng: 31.1656 };

const ukraineCities = [
  { name: 'Vinnytsia', position: { lat: 49.2328, lng: 28.4682 } },
  { name: 'Dnipro', position: { lat: 48.4647, lng: 35.0462 } },
  { name: 'Donetsk', position: { lat: 48.0159, lng: 37.8028 } },
  { name: 'Ivano-Frankivsk', position: { lat: 48.9215, lng: 24.7097 } },
  { name: 'Kharkiv', position: { lat: 49.9935, lng: 36.2304 } },
  { name: 'Kherson', position: { lat: 46.3, lng: 33.2 } },
  { name: 'Khmelnytskyi', position: { lat: 49.4214, lng: 26.9871 } },
  { name: 'Kropyvnytskyi', position: { lat: 48.5079, lng: 32.2623 } },
  { name: 'Luhansk', position: { lat: 48.5738, lng: 39.3078 } },
  { name: 'Lutsk', position: { lat: 50.7472, lng: 25.3254 } },
  { name: 'Lviv', position: { lat: 49.8397, lng: 24.0297 } },
  { name: 'Mykolaiv', position: { lat: 46.9750, lng: 31.9946 } },
  { name: 'Odesa', position: { lat: 46.4825, lng: 30.7233 } },
  { name: 'Poltava', position: { lat: 49.5883, lng: 34.5514 } },
  { name: 'Rivne', position: { lat: 50.6199, lng: 26.2516 } },
  { name: 'Sumy', position: { lat: 50.9077, lng: 34.7981 } },
  { name: 'Ternopil', position: { lat: 49.5535, lng: 25.5948 }},
  { name: 'Uzhhorod', position: { lat: 48.4, lng: 22.7 } },  
  { name: 'Zaporizhzhia', position: { lat: 47.6, lng: 35.7 } },  
  { name: 'Zhytomyr', position: { lat: 50.2547, lng: 28.6587 } },
  { name: 'Cherkasy', position: { lat: 49.4444, lng: 32.0598 } },
  { name: 'Chernivtsi', position: { lat: 48.2915, lng: 25.9358 } },
  { name: 'Chernihiv', position: { lat: 51.4982, lng: 31.2893 } },
  { name: 'Kyiv', position: { lat: 50.4501, lng: 30.5234 } },
  { name: 'Simferopol', position: { lat: 44.9521, lng: 34.1024 } },
];

function UkraineMap() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [ukraineRegionsGeoJSON, setUkraineRegionsGeoJSON] = useState(null);
  const [ukraineBorderGeoJSON, setUkraineBorderGeoJSON] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    fetch('/map/regions.json')
      .then((res) => res.json())
      .then(setUkraineRegionsGeoJSON)
      .catch((err) => console.error('Помилка завантаження regions.json:', err));

    fetch('/map/ukraine.json')
      .then((res) => res.json())
      .then(setUkraineBorderGeoJSON)
      .catch((err) => console.error('Помилка завантаження ukraine.json:', err));
  }, []);

  useEffect(() => {
    if (
      mapLoaded &&
      mapRef.current &&
      ukraineBorderGeoJSON?.features?.[0]?.geometry?.coordinates
    ) {
      const map = mapRef.current.getMap();
      const geometry = ukraineBorderGeoJSON.features[0].geometry;

      let coords = [];
      if (geometry.type === 'Polygon') {
        coords = geometry.coordinates.flat();
      } else if (geometry.type === 'MultiPolygon') {
        coords = geometry.coordinates.flat(2);
      }

      const lats = coords.map((c) => c[1]).filter((n) => typeof n === 'number');
      const lngs = coords.map((c) => c[0]).filter((n) => typeof n === 'number');

      if (lats.length && lngs.length) {
        map.fitBounds(
          [
            [Math.min(...lngs), Math.min(...lats)],
            [Math.max(...lngs), Math.max(...lats)],
          ],
          { padding: 20, duration: 0 }
        );
      }

      map.scrollZoom.disable();
      map.boxZoom.disable();
      map.dragRotate.disable();
      map.dragPan.disable();
      map.keyboard.disable();
      map.doubleClickZoom.disable();
      map.touchZoomRotate.disable();

      map.on('mouseenter', 'ukraine-regions-layer', (e) => {
        if (e.features?.[0]?.properties?.name) {
          setHoveredRegion(e.features[0].properties.name);
          map.getCanvas().style.cursor = 'pointer';
        }
      });

      map.on('mouseleave', 'ukraine-regions-layer', () => {
        setHoveredRegion(null);
        map.getCanvas().style.cursor = '';
      });
    }
  }, [mapLoaded, ukraineBorderGeoJSON]);

  const regionLayerStyle = {
    id: 'ukraine-regions-layer',
    type: 'fill',
    source: 'ukraine-regions',
    paint: {
      'fill-color': '#FFDAB9',
      'fill-opacity': [
        'case',
        ['==', ['get', 'name'], hoveredRegion || ''],
        0.8,
        0,
      ],
    },
  };

  const maskLayerStyle = {
    id: 'mask-layer',
    type: 'fill',
    paint: {
      'fill-color': '#ffffff',
      'fill-opacity': 1,
    },
  };

  if (!ukraineRegionsGeoJSON || !ukraineBorderGeoJSON) {
    return <div>Завантаження карти...</div>;
  }

  const ukraineHoleCoordinates = ukraineBorderGeoJSON.features[0]?.geometry?.coordinates || [];

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        latitude: center.lat,
        longitude: center.lng,
        zoom: 5,
      }}
      style={{ width: '100vw', height: '100vh' }}
      mapStyle="mapbox://styles/romanlazor/cmafeeexm00vc01s38bzhh9t2"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      interactiveLayerIds={['ukraine-regions-layer']}
      onLoad={() => setMapLoaded(true)}
    >
      {/* Рендеримо обидва джерела одразу після завантаження карти */}
      {mapLoaded && (
        <>
          <Source
            id="mask"
            type="geojson"
            data={{
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: [
                      [
                        [-180, 90],
                        [180, 90],
                        [180, -90],
                        [-180, -90],
                        [-180, 90],
                      ],
                      ...ukraineHoleCoordinates,
                    ],
                  },
                },
              ],
            }}
          >
            <Layer {...maskLayerStyle} />
          </Source>

          <Source id="ukraine-regions" type="geojson" data={ukraineRegionsGeoJSON}>
            <Layer {...regionLayerStyle} />
          </Source>
        </>
      )}

      {/* Відмітки міст */}
      {mapLoaded &&
        ukraineCities.map((city) => (
          <Marker
            key={city.name}
            latitude={city.position.lat}
            longitude={city.position.lng}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: 'red',
                borderRadius: '50%',
                border: '2px solid white',
              }}
            />
            <div
              style={{
                fontSize: '10px',
                color: 'black',
                marginTop: 2,
                fontFamily: 'Comfortaa, sans-serif',
              }}
            >
              {city.name}
            </div>
          </Marker>
        ))}
    </Map>
  );
}

export default UkraineMap;
