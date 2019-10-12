import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { NavButton } from './styles';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout 
        name="Email-Campaign"
        description="$5 for 5 credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <NavButton>Pay</NavButton>        
      </StripeCheckout>
    )
  }
}

export default Payments;