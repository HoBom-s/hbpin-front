import { Outlet } from "react-router-dom";

// project
import { Box } from "@/ui";
import { SideNavbar } from "..";

const Container = () => {
  return (
    <Box>
      <SideNavbar />
      <Outlet />
    </Box>
  );
};

export default Container;
