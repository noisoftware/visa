import React, { useState, useEffect } from "react";
import useForm from "../../useForm";
import validate from '../../FormValidationRules';
import { config } from '../../constant';
import axios from "axios";
import { MultiStepForm, Step } from 'react-multi-form';

// import { Link } from "react-router-dom";
// reactstrap components
import { 
  Card,
  CardBody,
  Col,
  Button, 
  Container, 
  Row,
  Form,
  Input,
  FormGroup,
  Label,
  CardHeader, 
   CardText, 
  CardTitle
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import GetViasHeader from "../../components/Headers/GetvisaPageHeader.js";

import BasicInfo from '../../components/form-steper/basic_information.js'
import AdditionalInfo from '../../components/form-steper/additional_info.js'
import Payment from '../../components/form-steper/Payment.js'
import Confirmation from '../../components/form-steper/Confirmation.js'
//import Button from '../../components/form-steper/button.js'

//import Carousel from "../sectionsBlock/top_visa_carousel.js";
const getCountryUrl = config.url.API_URL+"/get-country";
const getVisaPriceUrl = config.url.API_URL+"/get-visa-price";
const getOrderUrl = config.url.API_URL+"/get-order";

function GetVisaFormpage(props) {
	//console.log(props);	
	//localStorage.setItem('order_token', '');
	//localStorage.setItem('token', '');
	const [countries, setCountries] = useState();
	const [visaPrice, setVisaPrice] = useState(0);
	const getCountries = async () => {
		const res = await axios.get(getCountryUrl);
		//console.log(res.data.countries);
		const countries = res.data.countries;
		setCountries(countries);;
		//console.log(countries);
	};
	const getVisaPrice = async () => {
		const visPriceArray = new FormData();		
		visPriceArray.append("country", localStorage.getItem('country'));
		visPriceArray.append("visa_type", localStorage.getItem('visa_type_token'));
		axios.post(getVisaPriceUrl, visPriceArray)
		.then((response) => {
			if(response.data.status === 1){
				const visaPrice = response.data.price;
				setVisaPrice(visaPrice);
				
			}
		})
		.catch((error) => {
		// error response
		});
	};
	useEffect(() => {
		getCountries();
		getVisaPrice();
	}, []);
	const [active, setActive] = React.useState(1);
	const {
		values,
		errors, 
		handleChange,
		handleSubmit,
	} = useForm(order, validate, 'order', active);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	//const { travelling_date, first_name, last_name, email, phone, setData } = useState();
	
	//localStorage.setItem('order_token', '');
	
	
	function order() {
		
		console.log('No errors, submit callback called!');
		console.log(values);
		if(active === 1){
			const data1 = new FormData();
			data1.append("user_id", localStorage.getItem('token'));
			data1.append("travelling_date", values.travelling_date);
			data1.append("first_name", values.firstname);		
			data1.append("last_name", values.lastname);
			data1.append("dob", values.dob);
			data1.append("email", values.email);
			data1.append("confirm_email", values.confirm_email);
			data1.append("phone", values.phone);
			data1.append("travel_purpose", values.travel_purpose);
			data1.append("nationality", values.nationality);
			data1.append("step", active);
			data1.append("visa_type", localStorage.getItem('visa_type_token'));
			data1.append("visa_country", localStorage.getItem('country'));
			if(localStorage.getItem('order_token')){
				data1.append("order_id", localStorage.getItem('order_token'));
			}else{
				data1.append("order_id", '');
			}
			axios.post(getOrderUrl, data1, {
				headers: {
				  "Content-Type": "multipart/form-data"
				}
			})
			.then((response) => {
				console.log(response);
			// successfully uploaded response
				if(response.data.status === 1){
					localStorage.setItem('order_token', response.data.order_id);
					localStorage.setItem('token', response.data.user_id);
					const timer = setTimeout(() => { setActive(active + 1); }, 5000);
					return () => clearTimeout(timer);
				}else{
					
					const errorMessage = response.data.msg;
					setErrorMessage(errorMessage);
				}
			})
			.catch((error) => {
			// error response
			});
		}else if(active === 2){
			const data2 = new FormData();
			data2.append("birth_country", values.birth_country);
			data2.append("gender", values.gender);
			data2.append("marital_status", values.marital_status);
			data2.append("occupation", values.occupation);
			data2.append("passport_no", values.passport_no);
			data2.append("passport_issue_country", values.passport_issue_country);
			data2.append("passport_issue_date", values.passport_issue_date);
			data2.append("passport_expiry_date", values.passport_expiry_date);
			data2.append("additional_citizenship", values.additional_citizenship);
			data2.append("applicant_address", values.applicant_address);
			data2.append("applicant_city", values.applicant_city);
			data2.append("applicant_country", values.applicant_country);
			data2.append("vat_invoice_required", values.vat_invoice_required);
			data2.append("depature_date", values.depature_date);
			data2.append("step", active);
			data2.append("order_id", localStorage.getItem('order_token'));
			data2.append("user_id", localStorage.getItem('token'));
			
			axios.post(getOrderUrl, data2, {
				headers: {
				  "Content-Type": "multipart/form-data"
				}
			})
			.then((response) => {
				console.log(response);
			// successfully uploaded response
				if(response.data.status === 1){
					localStorage.setItem('order_token', response.data.order_id);
					localStorage.setItem('token', response.data.user_id);
					const timer = setTimeout(() => { setActive(active + 1); }, 5000);
					return () => clearTimeout(timer);
				}else{
					
					const errorMessage = response.data.msg;
					setErrorMessage(errorMessage);
				}
			})
			.catch((error) => {
			// error response
			});
		}else if(active === 3){
		}
		
	}
	
	
	
	
	return (
    <>
		<IndexNavbar />
		<div className="wrapper">
			
			<div className=" country_visa_form">
				<div className="content-center ">
					<Container>
						<Row>
							<Col md="8" >
								<Card  className="text-dark ">
									<CardHeader className="text-center p-3 bg-dark text-light">
										<h4 className="m-0 text-uppercase">APPLY FOR VISA ONLINE</h4>
									</CardHeader>
									
									<Form className="form" method="post" encType="multipart/form-data" onSubmit={handleSubmit} >                 
									<CardBody >
										<div className="col-10 m-auto">
											{errorMessage && (
											  <span className="error"> {errorMessage} </span>
											)}
											{successMessage && (
											  <span className="success"> {successMessage} </span>
											)}
											<MultiStepForm activeStep={active} >
												<Step label='Step 1'>
													<BasicInfo countries={countries} values={values} errors={errors} onChange={handleChange} />
												</Step>
												<Step label='Step 2'>
													<AdditionalInfo countries={countries} values={values} errors={errors} onChange={handleChange} />
												</Step>
												<Step label='Step 3'>
													<Payment countries={countries} values={values} errors={errors} onChange={handleChange} />
												</Step>
												<Step label='Step 4'>
													<Confirmation />
												</Step>
											</MultiStepForm>
									
											  {active !== 1 && (
												<Button onClick={() => setActive(active - 1)}>Previous</Button>
											  )}
											  {active < 3 && (
											  <Button type="submit" style={{ float: 'right' }} >Save and Next</Button>
											  )}
											  {active === 3 && (
												/*<Button onClick={() => setActive(active + 1)} style={{ float: 'right' }} >Save and continue</Button>*/
												<Button type="submit" style={{ float: 'right' }} >Pay & Continue</Button>
											  )}
	
											<div className="clearfix"></div>
										</div>
										{/* <Button color="primary" className="btn-block text-uppertcase">Apply For Visa</Button>
										<Button color="danger" className="btn-block text-uppertcase" onClick={handleCancel}>Cancel</Button> */}


									</CardBody>
									</Form>
								</Card>
							</Col>
							<Col md="4">
								
								<div className="country-pay">

								<Card>
       
        <CardBody>
          <CardText>
			  
			<FormGroup>
				<Label for="exampleSelect">Country</Label>
				<Input type="text" name="country" value={localStorage.getItem('country').charAt(0).toUpperCase()+localStorage.getItem('country').replace('-',' ').slice(1)} />
			</FormGroup>
			<FormGroup>
				<Label for="exampleSelect">Full Price</Label>
				<Input type="text" name="price" value={visaPrice} />
			</FormGroup>

		  </CardText>
        </CardBody>
      </Card>
								
								</div>
									
							</Col>
						</Row>
					</Container>
				</div>
			</div>
			
			<DefaultFooter />
		</div>
    </>
  );
}

export default GetVisaFormpage;;