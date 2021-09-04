// PLUGINS IMPORTS //
import React from 'react';
import styled from 'styled-components';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import 'ui/styles/tooltip.scss';

// TYPE IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export type TabsItemPropsType = {
  value: string;
  tooltip?: string;
  label?: string;
  Icon?: {checked: React.ReactNode; unchecked: React.ReactNode};

  // passado pelo componente pai Tabs
  checked?: boolean;
  onCheck?: (value: string) => void;
};

const TabsItem: React.FC<TabsItemPropsType> = props => {
  return (
    <>
      <RadioInputView
        id={props.value}
        checked={props.checked}
        onChange={() => (props.onCheck ? props.onCheck(props.value) : null)}
      />
      <LabelView htmlFor={props.value} data-tooltip={props.tooltip}>
        {props.Icon && (
          <IconWrapperView>
            {props.checked ? props.Icon.checked : props.Icon.unchecked}
          </IconWrapperView>
        )}
        {props.label}
      </LabelView>
    </>
  );
};

// STYLES //

const RadioInputView = styled.input.attrs({type: 'radio'})`
  display: none;

  &:checked {
    & + label {
      color: var(--primary);
    }
  }
`;

const LabelView = styled.label`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 70px;
  color: black;
  font-size: 14px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: color 50ms ease-in;

  &:hover {
    background-color: var(--foreground-hover);
  }
`;
const IconWrapperView = styled.span.attrs({role: 'img'})`
  width: 22px;
  height: 22px;
`;

export default TabsItem;
