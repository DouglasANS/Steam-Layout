import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import './style.css'

export default function CarouselCard({data, resetPackImg}) {
   const [dataImg, setDataImg] = useState([])
    const countRef = useRef(0)
    const currentActiveImg = useRef(0)

   useEffect(()=>{
    const newData = data.map(item=>{
        countRef.current = countRef.current + 1
        return {img: item, active: countRef.current === 1 ? true: false} 
    })

    setDataImg(newData)
    countRef.current = 0
    currentActiveImg.current = 0
   },[data, resetPackImg]) 

   const handleChangeImg = () =>{
    var newActive = dataImg
    newActive[currentActiveImg.current].active = false

    
    console.log(currentActiveImg.current,  dataImg.length - 1)

    if((currentActiveImg.current) >= (dataImg.length - 1)){
        newActive[0].active = true
        currentActiveImg.current = 0
    }else{
        newActive[currentActiveImg.current + 1].active = true
        currentActiveImg.current = currentActiveImg.current + 1
    }

    console.log(newActive)
    setDataImg([...newActive])
   }

  return (
    <div className='Carousel'>
    {
        dataImg.map((item)=>{
            return(
                <div className='ImgCarouselDiv'>
                    <img style={{width: item.active ? '190px':'140px', height: item.active ? '120px':'80px', opacity: item.active ? '1':'0.2'}} src={item.img} />
                </div> 
            )
        })
    }
    <FontAwesomeIcon style={{cursor: 'pointer', userSelect: 'none'}} onClick={()=>{handleChangeImg()}} color='#3ce1f5' size='1x' icon={faChevronRight}/>
    </div> 
  )
}
