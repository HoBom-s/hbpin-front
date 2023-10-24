import styled from "styled-components";

interface ImageBaseProps {
  $bordered: boolean;
}

export const ImageBase = styled.img<ImageBaseProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => (props.$bordered ? "8px" : "none")};
`;
