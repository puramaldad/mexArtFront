import React from 'react'
import comedor from '../../../assets/exibit.JPG';

const Overlay = () => {
    return (
        <div id=''
        className="uk-height-large uk-background-cover  uk-light uk-flex uk-flex-top"
        style={{backgroundImage:`url(${comedor})`}}
      >
        <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: .7,1,1; viewport: 0.5;">
            Headline
          </h1>
          <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    )
}

export default Overlay
