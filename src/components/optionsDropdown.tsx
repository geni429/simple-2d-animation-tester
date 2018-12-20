import * as React from "react";
import styled from "styled-components";

import { Category, FlexBox, CheckBox, Content } from "@ui";

// component props
type Props = {
  optionName: string;
  optionItems: Array<Option>;
  checkOptionEvent(optionName: string): void;
};

// styled components
const OptionsDropdownContainer = styled.div`
  margin-bottom: 16px;
`;

const OptionName = styled(Category)``;

const OptionItem = styled(FlexBox)``;

const OptionItemName = styled(Content)`
  width: calc(100% - 20px);
`;

// components
export const OptionsDropdown: React.SFC<Props> = ({
  optionName,
  optionItems,
  checkOptionEvent
}) => {
  return (
    <OptionsDropdownContainer>
      <OptionName>{optionName}</OptionName>
      {optionItems.map(optionItem => {
        const { key, name, disabled, defaultValue = void 0 } = optionItem;

        return (
          <OptionItem key={name} direction="row">
            <OptionItemName>{name}</OptionItemName>
            <CheckBox
              disabled={disabled}
              checked={defaultValue}
              onChange={() => checkOptionEvent(key)}
            />
          </OptionItem>
        );
      })}
    </OptionsDropdownContainer>
  );
};
