import React from "react";
import Button from "../elements/Button";
const Slides = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      uk-slideshow='animation:fade'
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src="https://compramuebles.es/wp-content/uploads/FRANCO-FORNITURE-FOTO-4A.jpg" alt="uno" uk-cover='true' />
          <div className="uk-position-center uk-position-small uk-text-center">
                <h1 className="uk-heading-medium"uk-slideshow-parallax="x: 100,-100">Lorem </h1>
                <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                <Button Primary>Select</Button>
            </div>
        </li>
        <li>
          <img src="https://www.mobiliariohd.com/wp-content/uploads/2017/11/dormitorios-kiu-3.jpg"alt="dos" uk-cover='true' />
          <div className="uk-position-center uk-position-small uk-text-center">
                <h1 className="uk-heading-medium"uk-slideshow-parallax="x: 100,-100">Lorem </h1>
                <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                <Button secondary>Select</Button>
            </div>
        </li>
        <li>
          <img src="https://cdn.shopify.com/s/files/1/2217/4155/products/RECAMARA_ALLISON_MONACO2_1400x.jpg?v=1520109723" alt="tres" uk-cover='true' />
          <div className="uk-position-center uk-position-small uk-text-center">
                <h1 className="uk-heading-medium"uk-slideshow-parallax="x: 100,-100">Lorem </h1>
                <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                <Button rounded>Select</Button>
            </div>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous='true'
        uk-slideshow-item="previous"
      >
        {/* <span uk-icon="icon: chevron-left" /> */}
      </a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next='true'
        uk-slideshow-item="next"
      >
        {/* <span uk-icon="icon: chevron-right" /> */}
      </a>
    </div>
  );
};

export default Slides;
