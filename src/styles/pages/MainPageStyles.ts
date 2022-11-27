import styled from "styled-components";
import { EmptyContainer } from "../common/GlobalStyles";

export interface InputRowContainerProps {
  hasMultiple?: boolean;
}

export const MainPageContainer = styled.div`
  padding: 20px 10px;
  width: 600px;
`;
export const InputRowContainer = styled.div<InputRowContainerProps>`
  margin-left: 15px;
  position: relative;

  ${({ hasMultiple }) => hasMultiple && `border-left: #d7d7d7 dashed 2px;`}
`;

export const FirstEmptyContainer = styled(EmptyContainer)`
  left: -2px;
`;

export const LastEmptyContainer = styled(FirstEmptyContainer)`
  top: 18px;
  height: 25px;
`;

export const SaveButton = styled.button`
  background: #006dff;
  width: 60px;
  height: 35px;
  font-size: 16px;
  color: white;
  border: none;
`;
