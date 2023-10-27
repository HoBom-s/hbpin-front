import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MapRenderWrap, MapFloatingButtonWrap, MapRendererWrap } from "./style";

// project
import { Spinner, Box } from "@/ui";
import { GeoMapComponent, QuickTabMenu, ListRenderer } from "@/components";

// type
import type { IconName } from "@/types/IconName";

interface QuickTabMenuItem {
  name: string;

  iconName: IconName;
}

export const Map = () => {
  const quickTabMenuItems: QuickTabMenuItem[] = [
    {
      name: "방문예정",
      iconName: "schedule",
    },
    {
      name: "방문완료",
      iconName: "done",
    },
    {
      name: "즐겨찾기",
      iconName: "star",
    },
  ];

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
              renderProps={(item: QuickTabMenuItem) => (
                <QuickTabMenu name={item.name} iconName={item.iconName} />
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
