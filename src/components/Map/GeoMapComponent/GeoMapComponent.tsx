// hook
import { useMapInit } from "@/hooks";

export const MyGeoMapComponent = () => {
  const { geoMapRef } = useMapInit();

  return (
    <div
      ref={geoMapRef}
      id="hbpin-map"
      style={{ width: "100%", height: "100vh", zIndex: 1 }}
    ></div>
  );
};
