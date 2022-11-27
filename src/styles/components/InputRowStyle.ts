import styled from "styled-components";
import { EmptyContainer, Flex } from "../common/GlobalStyles";
import { InputRowContainerProps } from "../pages/MainPageStyles";

export const HorizontalLine = styled.div<InputRowContainerProps>`
  position: absolute;
  margin-top: 12px;
  height: 0px;
  width: 15px;
  ${({ hasMultiple }) => hasMultiple && `border-top: #d7d7d7 dashed 2px;`}
`;

export const VerticalLine = styled.div`
  background: #d7d7d7;
  width: 2px;
`;

export const SwitchContainer = styled(Flex)`
  padding: 4px 24px;
  background: #f8f4f4;
  margin: 4px;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 1px #c4c4c4;
`;

export const TrashIconContainer = styled.div`
  width: 22px;
  color: #cdcdcd;
  padding-left: 8px;
  &:hover {
    color: #006dff;
    cursor: pointer;
  }
`;

export const SwitchLabel = styled.div`
  font-size: 14px;
`;
export const PlusButtonContainer = styled.div`
  margin: 5px;
`;

export const InputContainer = styled(Flex)`
  padding: 4px;
`;
export const InputElement = styled.input<{ isLastChild: boolean }>`
  position: relative;
  ${({ isLastChild }) => `margin-left: ${isLastChild ? "6" : "16"}px;`}

  width: 80px;
  height: 30px;
  border: #c7c7c7 solid 1px;

  &:focus {
    outline: none;
    border-color: #006dff;
  }
`;

export const NestedInputRowContainer = styled.div<InputRowContainerProps>`
  margin-left: 20px;

  ${({ hasMultiple }) => hasMultiple && ` border-left: #d7d7d7 dashed 2px;`}
`;

export const NestedFirstEmptyContainer = styled(EmptyContainer)``;

export const NestedLastEmptyContainer = styled(EmptyContainer)`
  position: relative;
  top: 15px;
  height: 24px;
  right: 10px;
`;
