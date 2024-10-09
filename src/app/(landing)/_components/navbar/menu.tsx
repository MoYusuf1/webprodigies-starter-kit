"use client"

import React from 'react'
import { useNavigation } from 'react-day-picker'

type MenuProps = {
  orientation: "mobile" | "desktop"
}

type Props = { orientation: MenuProps}

const menu = (props: Props) => {
  // const {section, OnSetSection} = useNavigation()
  
  return <div>menu</div>

}

export default menu