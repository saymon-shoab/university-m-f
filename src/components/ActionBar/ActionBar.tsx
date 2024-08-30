import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

type ActionBarProps = {
    title?: string
    children?: React.ReactElement | React.ReactNode
}

const ActionBar = ({title, children}: ActionBarProps) => {
  return (
    <div>
        <h1 style={{marginBottom:"3px"}}>{title}</h1>
        <div style={{display: 'flex', justifyContent:"space-between", alignItems:"center", margin:"10px 0px"}}>
            {children}
        </div>
    </div>
  )
}

export default ActionBar
