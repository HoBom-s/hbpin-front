// project
import { GeoMapErrorBoundary, GeoMapFallback, Map } from "@/components";

const GeoMap = () => {
  return (
    <GeoMapErrorBoundary fallback={GeoMapFallback}>
      <Map />
    </GeoMapErrorBoundary>
  );
};

export default GeoMap;
