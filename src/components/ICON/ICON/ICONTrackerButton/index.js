import React from 'react'
import styled from 'styled-components'
import { MultiSigWalletScore } from '@src/SCORE/MultiSigWalletScore'
import { connect } from 'react-redux'
import { getSafeAddress } from '@src/utils/route'

import { Icon } from '../..'

const StyledLink = styled.a`
  display: inline-flex;
  outline-color: ${({ theme }) => theme.colors.separator};
`

const ICONTrackerButton = ({
  networkConnected,
  className,
  value,
  network = 'mainnet'
}) => {
  const type = value.length > 42 ? 'tx' : 'address'
  const safeWallet = getSafeAddress()
  const msw = new MultiSigWalletScore(networkConnected, safeWallet)

  const onClick = (event) => {
    event.stopPropagation()
  }

  const onKeyDown = (event) => {
    // prevents event from bubbling when `Enter` is pressed
    if (event.keyCode === 13) {
      event.stopPropagation()
    }
  }

  return (
    <StyledLink
      className={className}
      aria-label='Show details on the ICON Tracker'
      rel='noopener noreferrer'
      onClick={onClick}
      href={`https://${msw.getTrackerEndpoint()}/${type}/${value}`}
      target='_blank'
      onKeyDown={onKeyDown}
    >
      <Icon
        size='sm'
        color='icon'
        type='externalLink'
        tooltip='Show details on the ICON Tracker'
      />
    </StyledLink>
  )
}

const mapStateToProps = state => {
  return {
    networkConnected: state.networkConnected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ICONTrackerButton)