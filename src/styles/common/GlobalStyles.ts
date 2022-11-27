import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;
export const JustifyBetween = styled(Flex)`
  justify-content: space-between;
`;
export const JustifyAround = styled(Flex)`
  justify-content: space-around;
`;

export const EmptyContainer = styled.div`
  position: absolute;
  width: 10px;
  height: 16px;
  background: white;
`;
