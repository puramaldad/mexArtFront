import React from 'react'
import  Wraper  from '../../elements/Wraper';
import Section  from '../../elements/Section'
import Box from '../../elements/Box'
import Image from '../../elements/Image'
import GreenText from '../../elements/GreenText'
import comedor from '../../../assets/descarga.jpeg';

const ProductsCards = () => {
    return (
        <Wraper id="products">
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
    )
}

export default ProductsCards
