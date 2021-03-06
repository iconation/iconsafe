import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import CircleDot from '@components/HeaderBar/components/CircleDot'

import Col from '@components/core/Col'
import Paragraph from '@components/core/Paragraph'
import { sm } from '@src/theme/variables'

const styles = () => ({
  network: {
    fontFamily: 'Averta, sans-serif'
  },
  account: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    paddingRight: sm
  },
  connect: {
    letterSpacing: '-0.5px',
    whiteSpace: 'nowrap'
  }
})

const ProviderDisconnected = ({ classes }) => (
  <>
    <CircleDot circleSize={35} dotRight={11} dotSize={16} dotTop={24} keySize={17} mode='error' />
    <Col className={classes.account} end='sm' layout='column' middle='xs'>
      <Paragraph
        className={classes.network}
        noMargin
        size='sm'
        transform='capitalize'
        weight='bold'
        data-testid='not-connected-wallet'
      >
        Not Connected
      </Paragraph>
      <Paragraph className={classes.connect} color='fancy' noMargin size='sm'>
        Connect Wallet
      </Paragraph>
    </Col>
  </>
)

export default withStyles(styles)(ProviderDisconnected)
