import React from 'react'
import { Games } from '../../../MockBack'

export default function CardGames() {

  return (
    <div style={{width: '200px', padding: '10px'}}>{
        Games.map((item)=>{
            return(
                <div style={{marginBottom: '10px', background: '#151720', width: '180px'}}>
                    <img style={{width: '180px', height: '100px'}} src={item.img}/>
                    <h5 style={{color: '#fff', textAlign: 'center'}}>R${item.price}</h5>
                </div>
            )
        })
    }</div>
  )
}
