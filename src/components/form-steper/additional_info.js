import React from 'react';
//import Input from './input';


// reactstrap components
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default function additional_information() {

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Additional Information </h3>
      <h4>  Personal Details </h4>

<FormGroup>
      <Label for="exampleSelect">Country / territory of birth</Label>
      <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
<FormGroup>
      <Label for="exampleSelect">Gender</Label>
      <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
 <FormGroup>
      <Label for="exampleSelect">Marital status</Label>
      <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Occupation</Label>
      <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>

      <h4>Passport details</h4>


      <FormGroup>
      <Label for="exampleSelect">Passport number </Label>
      <Input type="text" placeholder=""  />
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Country / territory of issue</Label>
      <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
       </FormGroup>
       <FormGroup>
      <Label for="exampleSelect">Date of issue</Label>
      <Input type="date" placeholder="Contact phone number" />
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Date of expiry</Label>
      <Input type="date" placeholder="Contact phone number" />
      </FormGroup>




      Do you have an additional citizenship?
      <div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> YES
    <span className="form-check-sign"></span>
  </label>
</div>
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> NO
    <span className="form-check-sign"></span>
  </label>
</div>
<div className="clearfix"></div>

<h4>Applicant’s address details</h4>



      <FormGroup>
      <Label for="exampleSelect">House no / street</Label>
      <Input type="text" placeholder="" />
      </FormGroup>
      <FormGroup>
        
      <Label for="exampleSelect">Village / town / city
</Label>
<Input type="text" placeholder="" />
      </FormGroup>
      <FormGroup>
      <Label for="exampleSelect">Country</Label>
      <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        </FormGroup>
      

        <h4>Vat invoice
</h4>
Do you want to receive a VAT invoice?

      <div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> YES
    <span className="form-check-sign"></span>
  </label>
</div>
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> NO
    <span className="form-check-sign"></span>
  </label>
</div>
<div className="clearfix"></div>


<h4>Details of visit</h4>


<FormGroup>
      <Label for="exampleSelect">Expected departure date</Label>
      <Input type="date" placeholder="Contact phone number" />
      </FormGroup>

      <h4>Necessary documents</h4>
<p>We accept documents in jpg, pdf, png and tiff formats. The required documents can be uploaded in the form of a photo, scan or photo using a webcam (if your web browser allows it).

</p>

<div className="form-check">
    <label className="form-check-label">
        <input className="form-check-input" type="checkbox" value=""/>
        I will upload documents later
        <span className="form-check-sign">
            <span className="check"></span>
        </span>
    </label>
</div>

<p color="orange">
We will send a message to your email which explains how you can upload the documents. Please load documents within 48 hours.
</p>
<h5>Biographical page of passport</h5>

<p>All four corners should be shown up on the final scanned image. Image must be clear and legible.</p>

<FormGroup>
      <Label for="exampleSelect" className="btn-primary btn">Upload passport</Label>
      <Input type="file" id="" />
      </FormGroup>
      <FormGroup></FormGroup>

      <h5>Applicants' photograph
</h5>

<p>Photograph have to complies with the passport photo guidelines</p>

<FormGroup>
      <Label for="exampleSelect" className="btn-primary btn">Upload passport size photograph</Label>
      <Input type="file" id="" />
      </FormGroup>
      <FormGroup></FormGroup>



    </div>
  )
}