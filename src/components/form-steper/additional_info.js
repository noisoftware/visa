import React from 'react';
//import Input from './input';


// reactstrap components
import { FormGroup, Label, Input } from 'reactstrap';


export default function additional_information(props) {
	function handleChange(event) {
        // Here, we invoke the callback with the new value
		//console.log(event.target.type);
		props.onChange(event);
		
    }
	
	return (
    <div>
		<h3 style={{textAlign: 'center'}}>Additional Information </h3>
		<h4>  Personal Details </h4>

		<FormGroup>
			<Label for="birth_country">Country / territory of birth</Label>
			<Input type="select" id="birth_country" name="birth_country" onChange={handleChange} value={props.values.birth_country || ''} >
				<option value="">Select Birth Country</option>
				{ 
				props.countries && props.countries.map((birthcontry,i1)=>( 
				<option key={i1} value={birthcontry.id}>{birthcontry.nicename}</option> 
				))}
			</Input>
			{props.errors.birth_country && ( <p className="help is-danger">{props.errors.birth_country}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="gender">Gender</Label>
			<Input type="select" name="gender" id="gender" onChange={handleChange} value={props.values.gender || ''} >
				<option value="">Select Gender</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Transgender">Transgender</option>
			</Input>
			{props.errors.gender && ( <p className="help is-danger">{props.errors.gender}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="marital_status">Marital status</Label>
			<Input type="select" name="marital_status" id="marital_status" onChange={handleChange} value={props.values.marital_status || ''} >
				<option value="">Select Marital Status</option>
				<option value="Single">Single</option>
				<option value="Married">Married</option>
			</Input>
		</FormGroup>
		<FormGroup>
			<Label for="occupation">Occupation</Label>
			<Input type="select" name="occupation" id="occupation" onChange={handleChange} value={props.values.occupation || ''} >
				<option value="">Select Occupation</option>
				<option value="Service">Service</option>
				<option value="Business">Business</option>
				<option value="Not Employed">Not Employed</option>
			</Input>
		</FormGroup>
		<h4>Passport details</h4>
		<FormGroup>
			<Label for="passport_no" >Passport No. </Label>
			<Input type="text" placeholder="Passport No." name="passport_no" onChange={handleChange} value={props.values.passport_no || ''} />
			{props.errors.passport_no && ( <p className="help is-danger">{props.errors.passport_no}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="passport_issue_country">Country / territory of issue</Label>
			<Input type="select" name="passport_issue_country" id="passport_issue_country" onChange={handleChange} value={props.values.passport_issue_country || ''} >
				<option value="">Select Country of Issue</option>
				{ 
				props.countries && props.countries.map((passissuecontry,i2)=>( 
				<option key={i2} value={passissuecontry.id}>{passissuecontry.nicename}</option> 
				))}
			</Input>
			{props.errors.passport_issue_country && ( <p className="help is-danger">{props.errors.passport_issue_country}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="passport_issue_date">Date of Issue</Label>
			<Input type="date" placeholder="Date of Issue" name="passport_issue_date" onChange={handleChange} value={props.values.passport_issue_date || ''} />
			{props.errors.passport_issue_date && ( <p className="help is-danger">{props.errors.passport_issue_date}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="passport_expiry_date">Date of Expiry</Label>
			<Input type="date" placeholder="Date of expiry" name="passport_expiry_date" onChange={handleChange} value={props.values.passport_expiry_date || ''} />
			{props.errors.passport_expiry_date && ( <p className="help is-danger">{props.errors.passport_expiry_date}</p> )}
		</FormGroup>
		Do you have an additional citizenship?
		<div className="form-check form-check-radio form-check-inline">
			<label className="form-check-label">
				<input className="form-check-input" type="radio" name="additional_citizenship" id="additional_citizenship" value="1" onChange={handleChange} /> YES
				<span className="form-check-sign"></span>
			</label>
		</div>
		<div className="form-check form-check-radio form-check-inline">
			<label className="form-check-label">
				<input className="form-check-input" type="radio" name="additional_citizenship" id="additional_citizenship" value="0" onChange={handleChange} /> NO
				<span className="form-check-sign"></span>
			</label>
		</div>
		<div className="clearfix"></div>
		<h4>Applicant’s address details</h4>
		<FormGroup>
			<Label for="applicant_address">House no / street</Label>
			<Input type="text" placeholder="Address" name="applicant_address" onChange={handleChange} value={props.values.applicant_address || ''} />
			{props.errors.applicant_address && ( <p className="help is-danger">{props.errors.applicant_address}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="applicant_city">Village / town / city</Label>
			<Input type="text" placeholder="City" name="applicant_city" onChange={handleChange} value={props.values.applicant_city || ''} />
			{props.errors.applicant_city && ( <p className="help is-danger">{props.errors.applicant_city}</p> )}
		</FormGroup>
		<FormGroup>
			<Label for="applicant_country">Country</Label>
			<Input type="select" name="applicant_country" id="applicant_country" onChange={handleChange} value={props.values.applicant_country || ''} >
				<option value="">Select Country</option>
				{ 
				props.countries && props.countries.map((contry,i3)=>( 
				<option key={i3} value={contry.id}>{contry.nicename}</option> 
				))}
			</Input>
			{props.errors.applicant_country && ( <p className="help is-danger">{props.errors.applicant_country}</p> )}
		</FormGroup>
        <h4>Vat invoice</h4>
		Do you want to receive a VAT invoice?
		<div className="form-check form-check-radio form-check-inline">
			<label className="form-vat_invoice_required-label">
				<input className="form-check-input" type="radio" name="vat_invoice_required" value="1" onChange={handleChange} /> YES
				<span className="form-check-sign"></span>
			</label>
		</div>
		<div className="form-check form-check-radio form-check-inline">
			<label className="form-vat_invoice_required-label">
				<input className="form-check-input" type="radio" name="vat_invoice_required" value="0" onChange={handleChange} /> NO
				<span className="form-check-sign"></span>
			</label>
		</div>
		<div className="clearfix"></div>
		<h4>Details of visit</h4>
		<FormGroup>
			<Label for="depature_date">Expected departure date</Label>
			<Input type="date" placeholder="Contact phone number" name="depature_date" onChange={handleChange} value={props.values.depature_date || ''} />
			{props.errors.depature_date && ( <p className="help is-danger">{props.errors.depature_date}</p> )}
		</FormGroup>
		
    </div>
  )
}