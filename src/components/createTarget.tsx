import * as React from "react";
import styled from "styled-components";
import { Content, FlexBox, Strong } from "../ui";

// styled components props
type InputFileAreaProps = {
  isDragOver: boolean;
  isTargetCreated: boolean;
};
type RTisTargetCompleted = {
  isTargetCreated: boolean;
};
// components props
type Props = {};
type State = {
  isDragOver: boolean;
  isTargetCreated: boolean;
  targetName: string;
};

// styled components
const Container = styled.div`
  width: 100%;
  height: 180px;
`;

const InputFileArea = styled(FlexBox)<InputFileAreaProps>`
  display: ${props => (props.isTargetCreated ? "none" : "")};
  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => (props.isDragOver ? "#fff" : "")};
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

const TargetPreview = styled.img<RTisTargetCompleted>`
  display: ${props => (props.isTargetCreated ? "" : "none")};
  max-width: 100%;
  margin-bottom: 5px;
`;

const TargetName = styled(Content)<RTisTargetCompleted>`
  display: ${props => (props.isTargetCreated ? "" : "none")};
`;

// component
export class CreateTarget extends React.Component<Props, State> {
  public state: State = {
    isDragOver: false,
    isTargetCreated: false,
    targetName: ""
  };

  private targetPreviewRef = React.createRef<HTMLImageElement>();

  private dragOverToAddFile = () => {
    if (!this.state.isDragOver) {
      this.setState({
        isDragOver: true
      });
    }
  };

  private dragLeave = () => {
    this.setState({
      isDragOver: false
    });
  };

  private addFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.currentTarget.files![0]);
    reader.onload = () => {
      this.targetPreviewRef.current!.src = String(reader.result);
    };

    this.setState({
      isDragOver: false,
      isTargetCreated: true,
      targetName: event.currentTarget.files![0].name
    });
  };

  render() {
    const inputFileContentStyle: React.CSSProperties = {
      position: "absolute",
      zIndex: 0
    };

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
          <Content style={inputFileContentStyle}>
            <Strong>Choose a file</Strong> or drag it here.
          </Content>
        </InputFileArea>
        <TargetPreview
          isTargetCreated={this.state.isTargetCreated}
          ref={this.targetPreviewRef}
        />
        <TargetName isTargetCreated={this.state.isTargetCreated}>
          {this.state.targetName}
        </TargetName>
      </Container>
    );
  }
}
