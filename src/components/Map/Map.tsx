import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MapRenderWrap } from "./style";

// project
import { Spinner } from "@/ui";
import { MyGeoMapComponent } from "@/components";

interface LatLngCenter {
  lat: number;
  lng: number;
}

const ZOOM: number = 10;

export const Map = () => {
  const center: LatLngCenter = {
    lat: 37.413294,
    lng: 127,
  };

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

    return <MyGeoMapComponent center={center} zoom={ZOOM} />;
  };

  return (
    <Wrapper
      apiKey={import.meta.env.VITE_APP_MAP_API_KEY}
      render={mapRenderProp}
    ></Wrapper>
  );
};
