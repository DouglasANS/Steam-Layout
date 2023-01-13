import { faArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.css'

export default function Pesquisar() {
  return (
    <div className='pesquisarContainer' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none',height: '80px', width: '100%'}}>
        <h1 className='destaque'>EM DESTAQUE</h1>

        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{position: 'relative'}}>
            <input className='inputPesquisar' placeholder='Buscar' /> 
            <FontAwesomeIcon className='iconPesquisarLupa' size='xl' icon={faMagnifyingGlass}/>
          </div>
        
          <div className='separate'></div>
          <h1 className='pesquisarIdioma'>Idioma</h1>
          <FontAwesomeIcon className='iconPesquisarArrow'  size='1x' icon={faArrowDown}/>

        </div>
        
    </div>
  )
}

