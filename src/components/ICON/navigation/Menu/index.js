import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 16px 0;
  box-sizing: border-box;
  max-height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const Menu = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

export default Menu
