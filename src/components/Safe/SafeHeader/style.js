import { screenSm, primaryText, turquoiseIcon, sm, smallFontSize, xs, disabled, fontSizeHeadingSm, secondaryText } from '@src/theme/variables'
import { createStyles } from '@material-ui/core/styles'

export const styles = createStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },
  userInfo: {
    flexWrap: 'nowrap',
    marginBottom: sm,

    [`@media (min-width: ${screenSm}px)`]: {
      marginBottom: '0'
    }
  },
  name: {
    marginLeft: sm,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  address: {
    marginRight: sm,
    overflow: 'hidden',
    maxWidth: '50%',

    [`@media (min-width: ${screenSm}px)`]: {
      overflow: 'visible',
      maxWidth: 'none'
    }
  },
  user: {
    justifyContent: 'left'
  },
  readonly: {
    backgroundColor: secondaryText,
    borderRadius: xs,
    color: '#ffffff',
    fontSize: smallFontSize,
    letterSpacing: '0.5px',
    lineHeight: '28px',
    marginLeft: sm,
    padding: `0 ${sm}`,
    textTransform: 'uppercase'
  },
  walletOwner: {
    backgroundColor: turquoiseIcon,
    borderRadius: xs,
    color: '#ffffff',
    fontSize: smallFontSize,
    letterSpacing: '0.5px',
    lineHeight: '28px',
    marginLeft: sm,
    padding: `0 ${sm}`,
    textTransform: 'uppercase'
  },
  iconSmall: {
    fontSize: 16
  },
  balance: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',

    [`@media (min-width: ${screenSm}px)`]: {
      marginLeft: 'auto',
      width: 'auto'
    }
  },
  receive: {
    borderRadius: '4px',
    marginLeft: sm,
    width: '50%',
    color: '#ffffff',

    '& > span': {
      fontSize: '14px'
    },
    [`@media (min-width: ${screenSm}px)`]: {
      minWidth: '95px',
      width: 'auto'
    }
  },
  send: {
    borderRadius: '4px',
    width: '50%',

    '& > span': {
      fontSize: '14px'
    },
    [`@media (min-width: ${screenSm}px)`]: {
      minWidth: '75px',
      width: 'auto'
    }
  },
  leftIcon: {
    marginRight: sm
  },
  nameText: {
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
    whiteSpace: 'normal'
  },
  totalBalance: {
    color: disabled,
    fontSize: fontSizeHeadingSm
  },
  qrCodeBtn: {
    cursor: 'pointer',
    width: '14px',
    height: '14px',
    marginLeft: '5px'
  },
  increasedPopperZindex: {
    zIndex: 2001
  },
  qrContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: `0 ${xs}`,
    borderRadius: '50%',
    transition: 'background-color .2s ease-in-out',
    '&:hover': {
      backgroundColor: '#F0EFEE'
    }
  }
})
