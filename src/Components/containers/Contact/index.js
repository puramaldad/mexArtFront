import React from "react";
import Wraper from "../../elements/Wraper";
import Header from "../../elements/Header";
import PlainText from "../../elements/PlainText";
import Box from "../../elements/Box";
import Button from "../../elements/Button";
import Input from '../../elements/Input';
import TextArea from '../../elements/TextArea';
const Contact = () => {
  return (
    <Wraper id="contact" colorback>
      <Header>Contact</Header>
      <PlainText>
        Contact with us if ay case of failure or just to let us now about the
        product
      </PlainText>
      <Wraper toRow className="uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid='true'>
        <Box >
          <PlainText>
            <span style={{fontWeight:600}}>microStore</span> <br/> 84 State Road 123<br/> City, State 24813 <br/>(123) 456 - 7890
          <br/>  contact@companyname.com
          </PlainText>
        </Box>
        <Box>
            <Input placeholder='Your Name' type='text' name="name"/>
            <Input placeholder='Your Email' type="email" name='email'/>
            <TextArea placeholder='Your Message'type='text' name='textArea'/>
            <br/>
            <Button rounded>Send Message</Button>
        </Box>
      </Wraper>
    </Wraper>
  );
};

export default Contact;
