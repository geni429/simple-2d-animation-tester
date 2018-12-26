import * as React from "react";
import styled from "styled-components";
import Draggable, { DraggableData } from "react-draggable";

type TargetContainerProps = {
  isFixed: boolean;
};

// component props types
type Props = TargetContainerProps & {
  target: AnimationTarget;
  onDrag?(event: MouseEvent, data: DraggableData): void;
};

const TargetContainer = styled.div<TargetContainerProps>`
  position: absolute;
  text-align: center;
  padding: ${props => (props.isFixed ? "20px" : "")};
  border-width: ${props => (props.isFixed ? `5px` : `0`)};
  border-style: dotted;
  border-color: #000;
  cursor: move;

  &::after {
    content: "Target will fixed on background.";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(calc(100% + 20px), -50%);
    white-space: pre;
    font-size: ${props => (props.isFixed ? "22px" : "0")};
    font-weight: 100;
  }
`;

const Target = styled.img``;

// components
export const AnimationTarget: React.SFC<Props> = ({
  isFixed,
  target,
  onDrag
}) => {
  const defaultPosition = {
    x: target.x,
    y: target.y
  };

  return (
    <Draggable onDrag={onDrag} defaultPosition={defaultPosition}>
      <TargetContainer
        isFixed={isFixed}
        onDragStart={event => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <Target src={target.data} />
      </TargetContainer>
    </Draggable>
  );
};
