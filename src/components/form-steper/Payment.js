import React from 'react';
import Input from './input';

export default function Payment(props) {
	function handleChange(event) {
        // Here, we invoke the callback with the new value
		//console.log(event.target.type);
		props.onChange(event);
    }
  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Payment Information</h3>
      <Input type="text" placeholder="4444-4444-4444-4444" label="Card Number" name="card_no" onChange={handleChange} />
      <Input type="text" placeholder="John Doe" label="Name on Card" name="card_name" onChange={handleChange} />
      
      <div style={{ display: 'flex'}}>
        <div style={{ flex: 1, paddingRight: 10}}>
        <Input type="text" placeholder="11/2024" label="Expiry Date" style={{marginRight: 10}} name="card_expiry" onChange={handleChange} />
        </div>
        <div style={{ flex: 1}}>

        <Input type="text" placeholder="000" label="CVC Code" name="card_cvc" onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}