import styled from "styled-components";

const SIDE_NAV_BAR_WIDTH: number = 256;
const ICON_WIDTH: number = 32;

interface SideNavbarWrapperProps {
  $isOpen: boolean;
}

export const SideNavbarWrapper = styled.div<SideNavbarWrapperProps>`
  margin: 0;
  width: ${(props) => (props.$isOpen ? SIDE_NAV_BAR_WIDTH : ICON_WIDTH)}px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.white700};
  border-right: 1px solid ${(props) => props.theme.colors.gray200};
  transition: width 0.3s;
`;
