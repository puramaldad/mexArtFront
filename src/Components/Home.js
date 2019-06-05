import React from "react";
import Slide from "./Slider";
import Wraper from "./elements/Wraper";
import comedor from "../assets/descarga.jpeg";
import sala from "../assets/sala.jpeg";
import exibit from "../assets/exibit.JPG"
import Header from "./elements/Header";
import Image from "./elements/Image";
import Section from "./elements/Section";
import Box from "./elements/Box";
import Button from "./elements/Button";
import GreenText from "./elements/GreenText";
const Home = () => {
  return (
    <div>
      <Slide />
      <Header>Productos</Header>
      <Wraper>
        <Section>
          <Box lined>
            <Image src={comedor} alt="comedor" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <div>
                {" "}
                <p>$600</p>
              </div>
              <div>
                {" "}
                <GreenText>Comedor</GreenText>
              </div>
            </div>
          </Box>
          <Box lined>
            <Image src={comedor} alt="comedor" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <div>
                {" "}
                <p>$600</p>
              </div>
              <div>
                {" "}
                <h4>Comedor</h4>
              </div>
            </div>
          </Box>
          <Box lined>
            <Image src={comedor} alt="comedor" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <div>
                {" "}
                <p>$600</p>
              </div>
              <div>
                {" "}
                <h4>Comedor</h4>
              </div>
            </div>
          </Box>
        </Section>
      </Wraper>
      <Section allWidth colorback>
        <div>
          <h3>Free National shipping only</h3>
        </div>
        <div>
          <Button secondary>Order Now</Button>
        </div>
      </Section>
      <Section>
        <article className="uk-article">
          <h1 className="uk-article-title">
            <a className="uk-link-reset" href="">
              About company Pellentesque interdum eget
            </a>
          </h1>

          <p className="uk-article-meta">
            Written by <a href="#">Super User</a> on 12 April 2012. Posted in{" "}
            <a href="#">Blog</a>
          </p>

          <p className="uk-text-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="uk-grid-small uk-child-width-auto" uk-grid='true'>
            <div>
              <a className="uk-button uk-button-text" href="#">
                Read more
              </a>
            </div>
            <div>
              <a className="uk-button uk-button-text" href="#">
                5 Comments
              </a>
            </div>
          </div>
        </article>
        <Button primary>Read More</Button>
      </Section>

     
        <div
          className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
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
    

        <div className="uk-child-width-1-2@m" uk-grid='true'>

        <div className="uk-h3">Fade</div>

<div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: fade">

    <ul className="uk-slideshow-items">
        <li>
            <img src={comedor} alt="imagen1" uk-cover='true'/>
        </li>
        <li>
            <img src={sala} alt="imagen2" uk-cover='true'/>
        </li>
        <li>
            <img src={sala} alt="imagen3" uk-cover='true'/>
        </li>
        <li>
            <img src={exibit} alt="imagen4" uk-cover='true'/>
        </li>
    </ul>

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous='true' uk-slideshow-item="previous"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="true" uk-slideshow-item="next"></a>

</div>

</div>
<div>
          </div>
    </div>
  );
};

export default Home;
