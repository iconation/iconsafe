import React from 'react'

import arrowSort from './images/arrowSort'
import connectedRinkeby from './images/connectedRinkeby'
import connectedWallet from './images/connectedWallet'
import bullit from './images/bullit'
import dropdownArrowSmall from './images/dropdownArrowSmall'
import arrowReceived from './images/arrowReceived'
import arrowReceivedWhite from './images/arrowReceivedWhite'
import arrowSent from './images/arrowSent'
import arrowSentWhite from './images/arrowSentWhite'
import threeDots from './images/threeDots'
import options from './images/options'
import plus from './images/plus'
import chevronRight from './images/chevronRight'
import chevronLeft from './images/chevronLeft'
import chevronUp from './images/chevronUp'
import chevronDown from './images/chevronDown'
import settingsChange from './images/settingsChange'
import creatingInProgress from './images/creatingInProgress'
import notOwner from './images/notOwner'
import notConnected from './images/notConnected'

const icons = {
  arrowSort,
  connectedRinkeby,
  connectedWallet,
  bullit,
  dropdownArrowSmall,
  arrowReceived,
  arrowReceivedWhite,
  arrowSent,
  arrowSentWhite,
  threeDots,
  options,
  plus,
  chevronRight,
  chevronLeft,
  chevronUp,
  chevronDown,
  settingsChange,
  creatingInProgress,
  notOwner,
  notConnected
}

/**
 * The `FixedIcon` renders an icon
 */
const FixedIcon = ({ type }) => {
  return <span>{icons[type]}</span>
}

export default FixedIcon
