import React from 'react';
import './flip.css';

export default function flip() {
  return (
    <div>
    <h1>FLIP CARD</h1>
    <div class="flip-container">
        <div class="flip-container-inner">
            <div class="flip-card-front">
            <img src="https://ih1.redbubble.net/image.4082381543.3204/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="img"/>
            </div>
            <div class="flip-card-back">
               <img src="https://play-lh.googleusercontent.com/csR_yWSd6cUScsyLAMNrNJrdOjil93_vK_vwjbh-QXe8-zUHYC-vT1itTQ_tx-ed8ho" alt="img"/>
            </div>
            </div>
        </div>
    </div>
  )
}
