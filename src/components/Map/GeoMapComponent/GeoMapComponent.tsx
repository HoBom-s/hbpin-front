import { useRef, useEffect } from "react";

interface MyGeoMapComponentProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

export const MyGeoMapComponent = ({ center, zoom }: MyGeoMapComponentProps) => {
  const geoMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (geoMapRef.current) {
      const geoMap: google.maps.Map = new window.google.maps.Map(
        geoMapRef.current,
        {
          center: center,
          zoom: zoom,
        },
      );

      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          new window.google.maps.Marker({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            map: geoMap,
          });
        },
      );
    }
  }, [center, zoom, geoMapRef]);

  return (
    <div
      ref={geoMapRef}
      id="hbpin-map"
      style={{ width: "100%", height: "100vh", zIndex: 1 }}
    ></div>
  );
};
