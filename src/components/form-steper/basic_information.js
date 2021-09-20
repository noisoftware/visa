import React, { useState, useEffect } from 'react';
//import Input from './input';


// reactstrap components
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default function basic_information(props) {
	console.log(props);
	function handleChange(event) {
        // Here, we invoke the callback with the new value
		//console.log(event.target.value);
        //props.onChange(event.target.name,event.target.value);
        props.onChange(event);
    }
	return (
    <div>
		<h3 style={{textAlign: 'center'}}>BASIC INFORMATION </h3>
		<FormGroup>
			<Label for="exampleSelect">Planned day of travel</Label>
			<Input type="date" placeholder="select date" name="travelling_date" onChange={handleChange} value={props.values.travelling_date || ''} />
			{props.errors.travelling_date && ( <p className="help is-danger">{props.errors.travelling_date}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">First Name</Label>
			<Input type="text" placeholder="Enter your first name" name="firstname" onChange={handleChange} value={props.values.firstname || ''} />
			{props.errors.firstname && ( <p className="help is-danger">{props.errors.firstname}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Surname</Label>
			<Input type="text" placeholder="Enter your surname" name="lastname" onChange={handleChange} value={props.values.lastname || ''} />
			{props.errors.lastname && ( <p className="help is-danger">{props.errors.lastname}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">DOB</Label>
			<Input type="date" placeholder="select date" name="dob" onChange={handleChange} value={props.values.dob || ''} />
			{props.errors.dob && ( <p className="help is-danger">{props.errors.dob}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Email Address</Label>
			<Input type="email" placeholder="Enter your e-mail" name="email" onChange={handleChange} value={props.values.email || ''} />
			{props.errors.email && ( <p className="help is-danger">{props.errors.email}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Email Address(re-enter)</Label>
			<Input type="email" placeholder="Enter your e-mail" name="confirm_email" onChange={handleChange} value={props.values.confirm_email || ''} />
			{props.errors.confirm_email && ( <p className="help is-danger">{props.errors.confirm_email}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Contact phone number</Label>
			<Input type="number" placeholder="Contact phone number" name="phone" onChange={handleChange} value={props.values.phone || ''} />
			{props.errors.phone && ( <p className="help is-danger">{props.errors.phone}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Purpose for travel</Label>
			<Input type="select" id="travel_purpose" name="travel_purpose" onChange={handleChange} value={props.values.travel_purpose || ''} >
				<option value="">Select Travel Purpose</option>
				<option value="Business">Business</option>
				<option value="Tourism">Tourism</option>
			</Input>
			{props.errors.travel_purpose && ( <p className="help is-danger">{props.errors.travel_purpose}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Nationality</Label>
			
			<Input type="select" id="nationality" name="nationality" onChange={handleChange} value={props.values.nationality || ''} >
				<option value="">Select Nationality</option>
				{ 
				props.countries && props.countries.map((contry,index)=>( 
				<option key={index} value={contry.id}>{contry.nicename}</option> 
				))}
			</Input>
			{props.errors.nationality && ( <p className="help is-danger">{props.errors.nationality}</p> )}
        </FormGroup>
		<div>
			<div className="form-check">
				<Label className="form-check-label">
					<Input className="form-check-input" type="checkbox" name="term_cond" onChange={handleChange} value={props.values.term_cond || ''} />
					<span className="form-check-sign"></span>
					I accept the Terms and Conditions.
				</Label>
			</div>
			{props.errors.term_cond && ( <p className="help is-danger">{props.errors.term_cond}</p> )}			
			<div className="form-check">
				<Label className="form-check-label">
					<Input className="form-check-input" type="checkbox" name="visa_cond" onChange={handleChange} value={props.values.visa_cond || ''} />
					<span className="form-check-sign"></span>
					In accordance with article 9 § 2 letter (a) of the General Regulation on the protection of 
					personal data of 27 April 2016 (Journal of Laws EU.L 2016 No. 119), I agree to processing 
					my personal data, including biometric data (passport photography) by IVS sp.z o.o. sp.k. (LLC LLP),
					in order to submit a visa application on my behalf (execution of the visa brokerage contract).
				</Label>
			</div>
			{props.errors.visa_cond && ( <p className="help is-danger">{props.errors.visa_cond}</p> )}
		</div>
		

      {/* <div>
      <Input type="text" placeholder="Enter your city" label="City"/>
      <Input type="text" placeholder="Enter your country" label="Country"/>
      </div> */}
    </div>
  )
}