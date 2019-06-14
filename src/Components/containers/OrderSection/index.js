import React from 'react';
import Section  from '../../elements/Section';
import Button from '../../elements/Button';
const OrderSection = () => {
    return (
        <Section id='order' allWidth colorback>
        <div >
          <h3>Free National shipping only</h3>
        </div>
        <div>
          <Button secondary>Order Now</Button>
        </div>
      </Section>
    )
}

export default OrderSection
