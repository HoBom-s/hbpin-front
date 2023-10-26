import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MapRenderWrap } from "./style";

// project
import { Spinner } from "@/ui";
import { GeoMapComponent } from "@/components";

export const Map = () => {
  const mapRenderProp = (status: Status) => {
    if (status === Status.FAILURE) {
      throw new Error(Status.FAILURE);
    } else if (status === Status.LOADING) {
      return (
        <MapRenderWrap>
          <Spinner size="lg" color="red" />
        </MapRenderWrap>
      );
    }

    return <GeoMapComponent />;
  };

  return (
    <Wrapper
      apiKey={import.meta.env.VITE_APP_MAP_API_KEY}
      render={mapRenderProp}
    />
  );
};
