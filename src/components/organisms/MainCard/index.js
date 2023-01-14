import React from 'react'
//import { data } from '../../../MockBack'
import SimpleIconButton from '../../atoms/SimpleIconButton'
import TypeCategory from '../../atoms/TypeCategory'
import teste from '../../../assets/img/teste.svg'
import './style.css'
import CarouselCard from '../../molecules/CarouselCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function MainCard({data, currentGameSelected, handleChangeGame, resetPackImg}) {
  return (
    <div className='MainCard'>
        <img className='SvgTeste' src={teste}/>
        <div style={{position: 'absolute', padding: '20px 15px'}}>

        
        <div className='Card'>
            <div className='View'>
                <img src={data[currentGameSelected].CenterImage} />
                <img src={data[currentGameSelected].backgroundCenterImage} />

            </div>
            <div className='Info'>
                <div className='InfoHeader'>
                    <h3>Promoção Especial</h3>
                    <a style={{cursor: 'pointer'}}>Ver Mais</a>

                </div>

                <h3 className='Title'>{data[currentGameSelected].title.toUpperCase()}</h3>

                <div style={{display: 'flex', margin: '0px 2px 70px 2px'}}>
                {data[currentGameSelected].category.map((item, index)=>{
                    console.log(index)
                    return(
                        <div style={{fontSize: '13px' ,padding: '2px 4px', backgroundColor: '#595A5F', margin: index === 0 ? '0px 2px 0 0': '0px 2px', color: '#fff'}}>
                            {item}
                        </div>
                    )
                })}
                </div>

                <div className='InfoHeader'>
                    <div>
                        <h2 className='Price'>R${data[currentGameSelected].price}</h2>
                        <h1 className='PromotionPrice'>R${data[currentGameSelected].promotionPrice}</h1>
                    </div>
                    <div className='Comprar'>
                        <SimpleIconButton title={'Comprar'} />
                    </div>
                </div>
                
            </div>
        </div>
        <CarouselCard data={data[currentGameSelected].packImages} resetPackImg={resetPackImg} />
        </div>

        <FontAwesomeIcon className='ArrowRightMainCard' onClick={()=>{handleChangeGame()}} color='#3ce1f5' size='xl' icon={faChevronRight}/>
    </div>
  )
}
