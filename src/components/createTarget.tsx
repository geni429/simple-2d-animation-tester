import * as React from "react";
import styled from "styled-components";
import { Content, FlexBox, Strong } from "../ui";

type InputFileAreaProps = {
  isDragOver: boolean;
  isTargetCreated: boolean;
};
type TargetPreviewProps = {
  isTargetCreated: boolean;
};
// components
type Props = {};
type State = {
  isDragOver: boolean;
  isTargetCreated: boolean;
};

const Container = styled.div`
  width: 100%;
  height: 180px;
`;

const InputFileArea = styled(FlexBox)<InputFileAreaProps>`
  display: ${props => (props.isTargetCreated ? `none` : ``)};
  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => (props.isDragOver ? `#fff` : ``)};
  border-width: 1px;
  border-color: #000;
  border-style: dashed;
  transition: 0.3s;
`;

const InputFile = styled.input.attrs({
  type: "file"
})`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const TargetPreview = styled.img<TargetPreviewProps>`
  max-width: 100%;
`;

export class CreateTarget extends React.Component<Props, State> {
  public state: State = {
    isDragOver: false,
    isTargetCreated: false
  };

  private targetPreviewRef = React.createRef<HTMLImageElement>();

  private dragOverToAddFile = () => {
    if (!this.state.isDragOver) {
      this.setState({
        isDragOver: true
      });
    }
  };

  private dragLeave = (): void => {
    this.setState({
      isDragOver: false
    });
  };

  private addFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.currentTarget.files![0]);
    reader.onload = (event: any) => {
      this.targetPreviewRef.current!.src = event.target.result;
    };

    this.setState({
      isDragOver: false,
      isTargetCreated: true
    });
  };

  render() {
    return (
      <Container>
        <InputFileArea
          justifyContent="center"
          alignItems="center"
          isDragOver={this.state.isDragOver}
          isTargetCreated={this.state.isTargetCreated}
        >
          <InputFile
            onDragOver={this.dragOverToAddFile}
            onDragLeave={this.dragLeave}
            onChange={this.addFile}
          />
          <Content
            style={{
              position: "absolute",
              zIndex: 0
            }}
          >
            <Strong>Choose a file</Strong> or drag it here.
          </Content>
        </InputFileArea>
        <TargetPreview
          isTargetCreated={this.state.isTargetCreated}
          ref={this.targetPreviewRef}
        />
      </Container>
    );
  }
}
