import { faBagShopping, faCirclePlus, faFileLines, faGift, faHouse, faTag, faUserGroup, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.css'

export default function MenuOptions() {

  const options = [
    {title: 'Home', icon: faHouse},
    {title: 'Amigos', icon: faUserGroup},
    {title: 'Marcadores', icon: faTag},
    {title: 'Curadores', icon: faWifi},
    {title: 'Recomendados', icon: faFileLines},
    {title: 'Lançamentos', icon: faCirclePlus },
    {title: 'Loja de pontos', icon: faBagShopping},
    {title: 'Vale-Presente', icon: faGift},
  ]

  return (
    <div className='optionsContainer' style={{ backgroundColor: 'none', width: '100px', height: 'calc(100vh - 80px)'}}>
      {
        options.map((item, index) =>{
          return(
            <div className='options'>
              <FontAwesomeIcon className='iconOptions' color='rgba(224, 224, 224, 0.247)' icon={item.icon}/>
              <h5>{item.title}</h5>
            </div>
          )
        })
      }
    
    </div>
  )
}
