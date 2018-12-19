import styled from "styled-components";
import { getSizeWithUnit } from "@utils";

interface ButtonProps {
  width?: string | number;
  height?: string | number;
  background?: string;
  border?: number;
  borderRadius?: number;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${props => (props.width ? getSizeWithUnit(props.width) : "100%")};
  height: ${props => (props.height ? getSizeWithUnit(props.height) : "55px")};
  background: ${props =>
    props.disabled
      ? "#dbd6ff"
      : props.background
      ? props.background
      : "#4a4080"};
  border: ${props => (props.border ? getSizeWithUnit(props.border) : 0)};
  border-radius: ${props =>
    props.borderRadius ? getSizeWithUnit(props.borderRadius) : 2};
  outline: none;
  font-weight: 500;
  color: ${props => (props.disabled ? "#eceff1" : "#ffffff")};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export const PrimaryButton = styled(Button)``;
