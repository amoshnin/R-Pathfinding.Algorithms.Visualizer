// PLUGINS IMPORTS //
import React from 'react';
import styled from 'styled-components';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import 'ui/styles/tooltip.scss';

// TYPE IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  label?: string;
  Icon?: React.ReactNode;
  tooltip?: string;
  disabled?: boolean;
  primary?: boolean;
  onClick?: () => void;
};

const Button: React.FC<PropsType> = props => {
  return (
    <WrapperView
      primary={props.primary}
      disabled={props.disabled}
      data-tooltip={props.tooltip}
      onClick={props.onClick}>
      <Label>
        {props.Icon && props.Icon}
        {props.label}
      </Label>
    </WrapperView>
  );
};

type WrapperViewProps = {
  primary?: boolean;
};

const WrapperView = styled.button<WrapperViewProps>`
  user-select: none;
  text-decoration: none;
  text-align: center;

  font-size: 14px;
  height: var(--form-item-height);
  padding: 0 0.5em;
  border-radius: var(--border-radius);
  cursor: pointer;

  border: ${props => (props.primary ? 'none' : 'var(--border)')};
  color: ${props => (props.primary ? '#fff' : 'var(--text-color)')};
  background-color: ${props => (props.primary ? '#000' : 'var(--foreground)')};

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: var(--foreground-hover);
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Button;
