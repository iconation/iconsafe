import React from 'react'
import styled from 'styled-components'

import { Icon } from '../../dataDisplay/Icon'
import { Text } from '../../index'

const StyledButtonLink = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: inherit;
  display: flex;
  align-items: center;

  :focus {
    outline: none;
  }
`

const ButtonLink = ({
  iconType,
  children,
  textSize = 'lg',
  ...rest
}) => {
  return (
    <StyledButtonLink {...rest}>
      {iconType && <Icon size='md' color={rest.color} type={iconType} />}
      <Text size={textSize} color={rest.color}>
        {children}
      </Text>
    </StyledButtonLink>
  )
};

export default ButtonLink
