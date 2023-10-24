import styled from "styled-components";

const SIDE_BAR_NAV_WIDTH: number = 291;
const ICON_WIDTH: number = 32;

interface SideNavbarWrapperProps {
  $isOpen: boolean;
}

export const SideNavbarWrapper = styled.div<SideNavbarWrapperProps>`
  margin: 0;
  padding: 10px;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  width: ${(props) => (props.$isOpen ? "auto" : `${ICON_WIDTH}px`)};
  max-width: ${SIDE_BAR_NAV_WIDTH}px;
  background-color: ${(props) => props.theme.colors.white700};
  transition: width 0.3s;
  box-shadow:
    0 1px 2px rgba(60, 64, 67, 0.3),
    0 2px 3px 2px rgba(60, 64, 67, 0.15);
  position: fixed;
  z-index: 10;
`;
