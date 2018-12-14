import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Content, FlexBox, Strong, SubTitle, Button } from "../ui";
import { setTarget, setInitialOptions } from "../actions/animations";
import { OptionsDropdown, Option } from "./optionsDropdown";

const mapStateToProps = (state: RootState) => {
  return {
    animations: state.animations
  };
};

const mapDispatchToProps = {
  setTarget,
  setInitialOptions
};

// styled components props
type InputFileAreaProps = {
  isDragOver: boolean;
  isTargetCreated: boolean;
};

type RTisTargetCompleted = {
  isTargetCreated: boolean;
};
// components props
type InputTargetProps = {
  fadeIn(): void;
  fadeOut(): void;
  addFile(event: React.ChangeEvent<HTMLInputElement>): void;
  isDragOver: boolean;
  isTargetCreated: boolean;
};

type InitialSettingProps = {
  options: ObjectType<Array<Option>>;
  checkOptionEvent(optionName: string): void;
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

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

const InputTargetFileContainer = styled(FlexBox)<InputFileAreaProps>`
  display: ${props => (props.isTargetCreated ? "none" : "")};
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  background: ${props => (props.isDragOver ? "#fff" : "")};
  border-width: 1px;
  border-color: #000;
  border-style: dashed;
  transition: 0.3s;
`;

const InputTargetFile = styled.input.attrs({
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
  margin-bottom: 20px;
`;

const InitialSettingContainer = styled.div``;

// components
const InputTarget: React.SFC<InputTargetProps> = ({
  fadeIn,
  fadeOut,
  addFile,
  isDragOver,
  isTargetCreated
}) => {
  const inputFileContentStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 0
  };

  return (
    <InputTargetFileContainer
      justifyContent="center"
      alignItems="center"
      isDragOver={isDragOver}
      isTargetCreated={isTargetCreated}
    >
      <InputTargetFile
        onDragOver={fadeIn}
        onDragLeave={fadeOut}
        onChange={addFile}
      />
      <Content style={inputFileContentStyle}>
        <Strong>Choose a file</Strong> or drag it here.
      </Content>
    </InputTargetFileContainer>
  );
};

const InitialSetting: React.SFC<InitialSettingProps> = ({
  options,
  checkOptionEvent
}) => {
  return (
    <InitialSettingContainer>
      <SubTitle>Initial setting</SubTitle>
      {Object.keys(options).map(optionName => {
        return (
          <OptionsDropdown
            key={`${options[optionName]}`}
            optionName={optionName}
            optionItems={options[optionName]}
            checkOptionEvent={checkOptionEvent}
          />
        );
      })}
    </InitialSettingContainer>
  );
};

class CreateTargetComponent extends React.Component<Props, State> {
  public state: State = {
    isDragOver: false,
    isTargetCreated: false,
    targetName: ""
  };

  private targetPreviewRef = React.createRef<HTMLImageElement>();

  private fadeIn = () => {
    if (!this.state.isDragOver) {
      this.setState({
        isDragOver: true
      });
    }
  };

  private fadeOut = () => {
    this.setState({
      isDragOver: false
    });
  };

  private addFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.currentTarget.files![0]);
    reader.onload = () => {
      this.targetPreviewRef.current!.src = String(reader.result);
      this.props.setTarget(String(reader.result));
    };

    this.setState({
      isDragOver: false,
      isTargetCreated: true,
      targetName: event.currentTarget.files![0].name
    });
  };

  public checkOption = (key: AnimationOptionKeys) => {
    const options = { ...this.props.animations.options };
    options[key] = !options[key];
    this.props.setInitialOptions(options);
  };

  render() {
    const inputTargetProps: InputTargetProps = {
      fadeIn: this.fadeIn,
      fadeOut: this.fadeOut,
      addFile: this.addFile,
      isDragOver: this.state.isDragOver,
      isTargetCreated: this.state.isTargetCreated
    };
    const initialSettingProps: InitialSettingProps = {
      options: {
        placement: [
          { key: "fixed", name: "fixed (no animation)", isChecked: false }
        ],
        animation: [
          {
            key: "transform",
            name: "transform animation",
            isChecked: false
          },
          { key: "fade", name: "fade animation", isChecked: false }
        ]
      },
      checkOptionEvent: this.checkOption
    };

    return (
      <Container>
        <InputTarget {...inputTargetProps} />
        <TargetPreview
          isTargetCreated={this.state.isTargetCreated}
          ref={this.targetPreviewRef}
        />
        <TargetName isTargetCreated={this.state.isTargetCreated}>
          {this.state.targetName}
        </TargetName>
        <InitialSetting {...initialSettingProps} />
        <Button>Create Animation</Button>
      </Container>
    );
  }
}

export const CreateTarget = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTargetComponent);
