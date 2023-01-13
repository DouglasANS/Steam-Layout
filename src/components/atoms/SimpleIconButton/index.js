import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import React from 'react'

export default function SimpleIconButton({title, icon, color = '#fff', background = '#33a13f'}) {
  return (
    <Button style={{color: color, background: background}}>
      <FontAwesomeIcon icon={icon} style={{marginRight: '8px'}} />
      <h6>{title}</h6>
    </Button>
  )
}
