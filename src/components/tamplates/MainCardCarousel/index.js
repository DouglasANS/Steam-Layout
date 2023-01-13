import React, { useEffect, useRef, useState } from 'react'
import MainCard from '../../organisms/MainCard'
import { data } from '../../../MockBack'
import './style.css'

export default function MainCardCarousel() {

    const [totalGames, setTotalGames] = useState([])
    const [currentGameSelected, setCurrentGameSelected] = useState(0)

    useEffect(()=>{
        var newTotalGames = data.map((item, index)=>{
            return {id: index}
        })
        setTotalGames(newTotalGames)

        setCurrentGameSelected(0)
    },[])

    const handleChangeGame = (index) =>{
        console.log('222', index, data.length,currentGameSelected)
        if(index === undefined){
            if(data.length === currentGameSelected +1){
                setCurrentGameSelected(0)
            }else{
                setCurrentGameSelected(currentGameSelected+1)
            }
        }else{
            setCurrentGameSelected(index)
        }
    }

  return (
    <div style={{width: '1050px'}}>
        <MainCard data={data} currentGameSelected={currentGameSelected} handleChangeGame={handleChangeGame}/>
        <div style={{display: 'flex', justifyContent: 'end', width: '1050px'}}>
            {
                
                totalGames.map((item, index)=>{
                    return(
                        <div onClick={()=>{handleChangeGame(index)}} className='selectedGame'>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
