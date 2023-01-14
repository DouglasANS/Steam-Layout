import React from 'react'
import './style.css'

export default function GeneroCard() {

  const generos = [
    {title: 'Gratis'},
    {title: 'Aventura'},
    {title: 'Ação'},
    {title: 'Casual'},
    {title: 'Corridas'},
    {title: 'Desporto'},
    {title: 'Estratégia'},
    {title: 'Indie'},
    {title: 'Multijogador'},
    {title: 'RPG'},
    {title: 'Simulação'},
  ]


  return (
    <div className='generoContainer' style={{ backgroundColor: 'none', width: '200px', height: '505px'}}>
      {generos.map((item,index)=>{
        return(
          <div>
            <h3 className='titles'>{item.title}</h3>
          </div>
        )
      })}
      <h2 className='titleGenero'>Gênero</h2>
    </div>
  )
}
