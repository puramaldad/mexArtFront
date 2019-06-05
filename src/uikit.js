import React from "react";
import Button from "./Components/elements/Button";
import Wraper from "./Components/elements/Wraper";
import Input from "./Components/elements/Input";
import Header from "./Components/elements/Header";
import GreenText from "./Components/elements/GreenText";
import Image from "./Components/elements/Image";
import cama from "./assets/sala.jpeg";
import Section from "./Components/elements/Section";
import Box from "./Components/elements/Box";

const uikit = () => (
  <>
    <Wraper>
      <Button>Boton primario</Button>
      <Button secondary>Boton secundario</Button>
      <Button rounded> Boton Redondo</Button>
    </Wraper>
    <Wraper line toRow allWidth>
       <Header>This Its our Inputs or <GreenText>User speak</GreenText></Header>
    </Wraper>
    <Section colorback>
       <Image src={cama} alt='imagen portada'/>
       <Box>
          div mejorado
       </Box>
    </Section>
    <Section colorback>
      <Input label type='mail'placeholder='Insert email'/>
      <Input placeholder='name'/>
      <Input placeholder='address'/>
      <Input placeholder='Telephone number'/>
      <Input placeholder='Card Number'/>
      <Input placeholder='password' type="password"/>
    
    </Section>
  </>
);

export default uikit;
