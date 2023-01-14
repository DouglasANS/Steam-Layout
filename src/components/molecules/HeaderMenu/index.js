import React from 'react'
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import steamLogo from '../../../assets/img/Steam_Logo.png'
import SimpleIconButton from '../../atoms/SimpleIconButton';
import './style.css'

export default function HeaderMenu() {
  return (
    <div className='Container2'>
        <div className='Menu'>
          <img alt="Steam Logo" src={steamLogo} />
          <Link style={{textDecoration: 'none', color: '#fff'}} to={`/`}><h1>Loja</h1></Link>
          <Link style={{textDecoration: 'none', color: '#fff'}} to={`/`}><h1>Comunidade </h1></Link>
          <Link style={{textDecoration: 'none', color: '#fff'}} to={`/`}><h1>Categoria</h1></Link>
          <Link style={{textDecoration: 'none', color: '#fff'}} to={`/`}><h1>Sobre</h1></Link>
          <Link style={{textDecoration: 'none', color: '#fff'}} to={`/`}><h1>Suporte</h1></Link>
        </div>
        <div className='Menu2'>
          <SimpleIconButton title={'Download Steam'} icon={faCloudDownload} />
          <div className='separate'></div>
          <Link style={{textDecoration: 'none', color: '#fff'}} to={`/`}><h4>Iniciar Sessão</h4></Link>
        </div>
    </div>
  )
}
