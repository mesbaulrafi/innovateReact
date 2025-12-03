import React, { Children } from 'react'

const Containar = ({className,children}) => {
  return (
    <div className={`max-w-[1340px] m-auto ${className}`}>{children}</div>
  )
}

export default Containar