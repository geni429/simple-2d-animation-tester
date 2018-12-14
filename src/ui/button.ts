import styled from "styled-components";
import { getSizeWithUnit } from "@utils";

interface ButtonProps {
  width?: string | number;
  height?: string | number;
  background?: string;
  border?: number;
  borderRadius?: number;
}

const Button = styled.button<ButtonProps>`
  width: ${props => (props.width ? getSizeWithUnit(props.width) : "100%")};
  height: ${props => (props.height ? getSizeWithUnit(props.height) : "55px")};
  background: ${props => (props.background ? props.background : "white")};
  border: ${props => (props.border ? getSizeWithUnit(props.border) : 0)};
  border-radius: ${props =>
    props.borderRadius ? getSizeWithUnit(props.borderRadius) : 2};
  outline: none;
  font-weight: 500;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)``;
