import { useRef, useState, useEffect } from "react";

interface Coords {
  lat: number;
  lng: number;
}

const ZOOM: number = 10;

export const useMapInit = () => {
  const geoMapRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<Coords>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;

        setCoords({
          lat: latitude,
          lng: longitude,
        });
      },
    );
  }, []);

  useEffect(() => {
    if (geoMapRef.current) {
      const { lat, lng } = coords;

      const geoMap: google.maps.Map = new window.google.maps.Map(
        geoMapRef.current,
        {
          center: {
            lat: lat,
            lng: lng,
          },
          zoom: ZOOM,
        },
      );

      new window.google.maps.Marker({
        position: {
          lat: lat,
          lng: lng,
        },
        map: geoMap,
      });
    }
  }, [geoMapRef, coords]);

  return {
    geoMapRef,
  };
};
