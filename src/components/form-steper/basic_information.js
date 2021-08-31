import React from 'react';
//import Input from './input';


// reactstrap components
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default function basic_information() {

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>BASIC INFO
AND PAYMENT </h3>


<FormGroup>
      <Label for="exampleSelect">Planned day of travel</Label>
      <Input type="date" placeholder="select date"  />
      </FormGroup>
<FormGroup>
      <Label for="exampleSelect">Full Name</Label>
      <Input type="text" placeholder="Enter your full name" />
      </FormGroup>
 <FormGroup>
      <Label for="exampleSelect">Surname</Label>
      <Input type="text" placeholder="Enter your surname" />
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">DOB</Label>
      <Input type="date" placeholder="select date" />
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Email Address</Label>
      <Input type="email" placeholder="Enter your e-mail"  />
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Email Address(re-enter)</Label>
       <Input type="email" placeholder="Enter your e-mail"  />
       </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Contact phone number</Label>
      <Input type="number" placeholder="Contact phone number" />
      </FormGroup>
      <FormGroup>
        
      <Label for="exampleSelect">Purpose for travel</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Nationality</Label>
        <Input type="text" placeholder="Nationality" />
        </FormGroup>
      
      
      <div>

      <div className="form-check">
    <Label className="form-check-label">
      <Input className="form-check-input" type="checkbox"/>
      <span className="form-check-sign"></span>
      I accept the Terms and Conditions.
    </Label>
  </div>

  <div className="form-check">
    <Label className="form-check-label">
      <Input className="form-check-input" type="checkbox"/>
      <span className="form-check-sign"></span>
      In accordance with article 9 § 2 letter (a) of the General Regulation on the protection of 
      personal data of 27 April 2016 (Journal of Laws EU.L 2016 No. 119), I agree to processing 
      my personal data, including biometric data (passport photography) by IVS sp.z o.o. sp.k. (LLC LLP),
       in order to submit a visa application on my behalf (execution of the visa brokerage contract).
    </Label>
  </div>


      </div>

      {/* <div>
      <Input type="text" placeholder="Enter your city" label="City"/>
      <Input type="text" placeholder="Enter your country" label="Country"/>
      </div> */}
    </div>
  )
}