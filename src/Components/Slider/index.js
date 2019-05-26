import React from 'react';
import { Link } from 'react-router-dom';
const Slides = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: push">

    <ul className="uk-slideshow-items">
        <li>
            <img src="https://compramuebles.es/wp-content/uploads/FRANCO-FORNITURE-FOTO-4A.jpg" alt="uno" uk-cover='false'/>
            <div className="uk-position-center uk-position-small uk-text-center">
                <h1 className="uk-heading-medium"uk-slideshow-parallax="x: 100,-100">Lorem </h1>
                <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
            </div>
        </li>
        <li>
            <img src="https://www.mobiliariohd.com/wp-content/uploads/2017/11/dormitorios-kiu-3.jpg" alt="2" uk-cover='false'/>
            <div className="uk-position-center uk-position-small uk-text-center">
                <h1 className="uk-heading-medium" uk-slideshow-parallax="x: 100,-100">Titulo segundo</h1>
                <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
            </div>
        </li>
        <li>
            <img src="https://hnmolina.es/3774-tm_thickbox_default/composicion-salon-franco-forniture-coleccion-serik.jpg" alt="3" uk-cover='false'/>
            <div className="uk-position-center uk-position-small uk-text-center">
                <h1 className="uk-heading-medium" uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Tercero</h1>
                <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</p>
            </div>
        </li>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </ul>
  
    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
  
</div>
  )
}

export default Slides

