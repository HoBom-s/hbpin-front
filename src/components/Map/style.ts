import styled from "styled-components";

export const MapRenderWrap = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapFloatingButtonWrap = styled.div`
  position: absolute;
  top: 10px;
  z-index: 20;
  left: 291px;
  max-width: calc(100% - 291px);
`;

export const MapRendererWrap = styled.div`
  & .quick-tab-menu {
    gap: 0.375rem;
    display: flex;
    justifycontent: space-between;
    alignitems: center;
    margin-left: 1rem;
  }
`;
