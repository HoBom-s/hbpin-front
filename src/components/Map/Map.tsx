import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MapRenderWrap, MapFloatingButtonWrap, MapRendererWrap } from "./style";

// project
import { Spinner, Box } from "@/ui";
import { GeoMapComponent, QuickTabMenu, ListRenderer } from "@/components";

export const Map = () => {
  const quickTabMenuItems: string[] = ["방문예정", "방문완료", "즐겨찾기"];

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

    return (
      <Box>
        <GeoMapComponent />
        <MapFloatingButtonWrap>
          <MapRendererWrap>
            <ListRenderer
              className="quick-tab-menu"
              items={quickTabMenuItems}
              renderProps={(menuName: string) => (
                <QuickTabMenu name={menuName} />
              )}
            />
          </MapRendererWrap>
        </MapFloatingButtonWrap>
      </Box>
    );
  };

  return (
    <Wrapper
      apiKey={import.meta.env.VITE_APP_MAP_API_KEY}
      render={mapRenderProp}
    />
  );
};
