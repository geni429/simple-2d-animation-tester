import * as React from "react";
import styled from "styled-components";

import { Category, FlexBox, CheckBox, Content } from "@ui";

// types
export type Option = {
  key: string;
  name: string;
  disabled: boolean;
};

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
        return (
          <OptionItem key={optionItem.name} direction="row">
            <OptionItemName>{optionItem.name}</OptionItemName>
            <CheckBox
              disabled={optionItem.disabled}
              onChange={() => checkOptionEvent(optionItem.key)}
            />
          </OptionItem>
        );
      })}
    </OptionsDropdownContainer>
  );
};
