import React from 'react'
import './style.css'

export default function PromocaoEspecialCard() {
  return (
    <div className='especialContainer' >
        <h1>PROMOÇÕES ESPECIAIS :</h1>

        <div className='contentEspecial'>
            <img src='https://meups.com.br/wp-content/uploads/2022/11/fifa-23-1-2-900x503.jpg'/>
            <div className='cardPack'>
              <h4>EA SPORTS FIFA 23</h4>
              <div>
                <div>
                <img src='https://assets.xboxservices.com/assets/11/21/11214bbe-412c-45b0-b0fb-1d93bd38ec42.jpg?n=FIFA-23_Gallery-0_1350x759_04.jpg'/>
                <img src='https://static1-br.millenium.gg/articles/8/12/61/8/@/142487-fifa-23-article_cover_bd-1.jpg'/>
                </div>
                <div>
                <img src='https://static1-br.millenium.gg/articles/6/11/66/6/@/133646-modele-diptique-mgg-orig-2-article_cover_bd-1.jpg'/>
                <img src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaf388cf57d5880b2/6361330298f72e24bf64087b/maxresdefault.jpeg'/>
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <div>
                  <h6>RS 299,90</h6>
                  <h5>RS 119,90</h5>
                </div>
                <div className='cardPercentage'>-67%</div>
              </div>

            </div>
        </div>
        
        
    
    </div>
  )
}
