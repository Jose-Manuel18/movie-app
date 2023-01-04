import styled from "styled-components/native";

export const Block = styled.View<{
  size?: number;
  flex?: boolean;
  width?: number;
}>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => props.size}px;
  ${(props) =>
    props.flex
      ? `
    flex: 1;
  `
      : ""}
`;
