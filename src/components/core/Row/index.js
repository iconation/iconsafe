import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.module'

import { capitalize } from '@src/utils/css'

const cx = classNames.bind(styles)

const Row = ({ align, children, className, grow, margin, testId = '', ...props }) => {
  const rowClassNames = cx(
    styles.row,
    margin ? capitalize(margin, 'margin') : undefined,
    align ? capitalize(align, 'align') : undefined,
    { grow },
    className
  )

  return (
    <div className={rowClassNames} data-testid={testId} {...props}>
      {children}
    </div>
  )
}

export default Row
