// PLUGINS IMPORTS //
import React from 'react';
import styled from 'styled-components';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import 'ui/styles/tooltip.scss';

// TYPE IMPORTS //

/////////////////////////////////////////////////////////////////////////////

// TODO: https://www.w3schools.com/howto/howto_custom_select.asp, https://codesandbox.io/s/wu4wf?file=/index.js
// TODO: https://pt-br.reactjs.org/docs/forms.html

type PropsType = {
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: [string, string][]; // array of [value, label]
  // tooltip?: string
};

const Select: React.FC<PropsType> = props => {
  return (
    <WrapperView
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      //   data-tooltip={props.tooltip}
    >
      {props.options.map(opt => (
        <option key={opt[0]} value={opt[0]}>
          {opt[1]}
        </option>
      ))}
    </WrapperView>
  );
};

const WrapperView = styled.select`
  font-size: 14px;
  height: var(--form-item-height);
  width: fit-content;
  padding: 0.35em 1.2em;

  border: var(--border);
  border-radius: var(--border-radius);

  color: var(--text-color);
  background-color: var(--foreground);
`;
export default Select;
