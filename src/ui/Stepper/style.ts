import styled from "styled-components";

interface StepperItemProps {
  $isActive: boolean;
}

export const StepperBase = styled.ol`
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray200};
`;

export const StepperItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 1rem;
  cursor: pointer;
`;

export const StepperItemBase = styled.li<StepperItemProps>`
  padding: 0px 28px;
  font-size: 0.525rem;
  content: "";
  color: ${(props) => props.theme.colors.white700};
  font-weigh: ${(props) => props.theme.font.weight.fw700};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.orange400 : "tranprent"};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 100;
`;
