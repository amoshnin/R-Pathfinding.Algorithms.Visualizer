// PLUGINS IMPORTS //
import React, {useState} from 'react';
import styled from 'styled-components';

// COMPONENTS IMPORTS //
import {TabsItem, TabsItemPropsType} from 'ui';

// EXTRA IMPORTS //
import 'ui/styles/tooltip.scss';

// TYPE IMPORTS //

/////////////////////////////////////////////////////////////////////////////

// TODO: https://codepen.io/brnpapa/pen/xxZwPgE

type PropsType = {
  defaultValue: string;
  onChange: (value: string) => void;
  children: React.ReactElement<TabsItemPropsType>[]; // necessário p/ que child sejá válido dentro de React.Children.map
};

export const Tabs: React.FC<PropsType> & {Item: React.FC<TabsItemPropsType>} =
  props => {
    const [checkedValue, setCheckedValue] = useState(props.defaultValue);

    // adiciona novas props em todos os filhos, antes de renderizá-los
    const childElements = React.Children.map(props.children, child =>
      React.cloneElement(child, {
        checked: child.props.value === checkedValue,
        onCheck: (value: string) => {
          setCheckedValue(value);
          props.onChange(value);
        },
      }),
    );

    return <WrapperView>{childElements}</WrapperView>;
  };

// STYLES //
const WrapperView = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  height: var(--form-item-height);
  border-radius: var(--border-radius);
  border: var(--border);
  * {
    z-index: 2;
  }
`;

Tabs.Item = TabsItem;
export default Tabs;
