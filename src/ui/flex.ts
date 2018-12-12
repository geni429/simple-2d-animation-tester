import styled from "styled-components";

type FlexBoxChildAlign = {
  justifyContent?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "center"
    | "left"
    | "right"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
};
type FlexBoxDirection = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
};
type FlexBoxProps = FlexBoxChildAlign & FlexBoxDirection;

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  jusity-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;
