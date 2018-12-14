import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Content, FlexBox, Strong, SubTitle, PrimaryButton } from "@ui";
import { setTarget, setInitialOptions } from "@actions/animations";
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

// components props
type InputTargetProps = {
  fadeIn(): void;
  fadeOut(): void;
  addFile(event: React.ChangeEvent<HTMLInputElement>): void;
  isDragOver: boolean;
  isTargetCreated: boolean;
  targetRef: React.RefObject<HTMLImageElement>;
  targetName: string;
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
  position: relative;
  width: 100%;
  height: ${props => (props.isTargetCreated ? "" : "100%")};
  margin-bottom: ${props => (props.isTargetCreated ? "40" : "20")}px;
  background: ${props => (props.isDragOver ? "#fff" : "")};
  border-width: ${props => (props.isTargetCreated ? "0" : "1px")};
  border-color: #000;
  border-style: dashed;
  transition: 0.3s;
`;

const InputTargetFile = styled.input.attrs({
  type: "file"
})`
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const TargetPreview = styled.img<{ isDragOver: boolean }>`
  position: relative;
  z-index: 0;
  max-width: 100%;
  opacity: ${props => (props.isDragOver ? 0 : 1)};
`;

const TargetName = styled(Content)`
  position: absolute;
  bottom: -10px;
  z-index: 0;
  transform: translateY(100%);
  width: 100%;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const InitialSettingContainer = styled.div``;

// components
const InputTarget: React.SFC<InputTargetProps> = ({
  fadeIn,
  fadeOut,
  addFile,
  isDragOver,
  isTargetCreated,
  targetRef,
  targetName
}) => {
  const inputFileContentStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 10,
    opacity: !targetName.length ? 1 : isDragOver ? 1 : 0
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
        onDrop={fadeOut}
        onChange={addFile}
      />
      <Content style={inputFileContentStyle}>
        {isDragOver ? (
          <React.Fragment>
            <Strong>Drop</Strong> here{" "}
            {!targetName.length ? "." : "to change target."}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Strong>Choose a file</Strong> or drag it here.
          </React.Fragment>
        )}
      </Content>
      <TargetPreview ref={targetRef} isDragOver={isDragOver} />
      <TargetName>{targetName}</TargetName>
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
    const targetFile = event.currentTarget.files![0];

    if (targetFile) {
      const reader = new FileReader();
      reader.readAsDataURL(targetFile);
      reader.onload = () => {
        this.targetPreviewRef.current!.src = String(reader.result);
        this.props.setTarget(String(reader.result));
      };

      this.setState({
        isDragOver: false,
        isTargetCreated: true,
        targetName: event.currentTarget.files![0].name
      });
    }
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
      isTargetCreated: this.state.isTargetCreated,
      targetRef: this.targetPreviewRef,
      targetName: this.state.targetName
    };
    const initialSettingProps: InitialSettingProps = {
      options: {
        placement: [
          {
            key: "fixed",
            name: "fixed (no animation)",
            isChecked: false
          }
        ],
        animation: [
          {
            key: "transform",
            name: "transform animation",
            isChecked: false
          },
          {
            key: "fade",
            name: "fade animation",
            isChecked: false
          }
        ]
      },
      checkOptionEvent: this.checkOption
    };

    return (
      <Container>
        <InputTarget {...inputTargetProps} />
        <InitialSetting {...initialSettingProps} />
        <PrimaryButton>Create Animation</PrimaryButton>
      </Container>
    );
  }
}

export const CreateTarget = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTargetComponent);
