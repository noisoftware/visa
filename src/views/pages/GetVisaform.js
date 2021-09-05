import React, { useState, useEffect } from "react";
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
  // InputGroupAddon,
  Label,
  // InputGroupText,
  // InputGroup,
  CardHeader, 
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




import Carousel from "../sectionsBlock/top_visa_carousel.js";
const getCountryUrl = config.url.API_URL+"/get-country";
const getOrderUrl = config.url.API_URL+"/get-order";

function GetVisaFormpage(props) {
	//console.log(localStorage.getItem('visa_type_token'));
	const [countries, setCountries] = useState();
	const getCountries = async () => {
		const res = await axios.get(getCountryUrl);
		//console.log(res.data.countries);
		const countries = res.data.countries;
		setCountries(countries);;
		//console.log(countries);
	};
	useEffect(() => {
		getCountries();
	}, []);
	const [active, setActive] = React.useState(1);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	//const { travelling_date, first_name, last_name, email, phone, setData } = useState();
	const [data, setData] = React.useState({
		travelling_date: "",
		first_name: "",
		last_name:"",
		dob: "",
		email: "",
		confirm_email: "",
		phone: "",
		travel_purpose: "",
		nationality: "",
		birth_country: "",
		gender: "",
		marital_status: "",
		occupation: "",
		passport_no: "",
		passport_issue_country: "",
		passport_issue_date: "",
		passport_expiry_date: "",
		additional_citizenship: "",
		applicant_address: "",
		applicant_city: "",
		applicant_country: "",
		vat_invoice_required: "",
		depature_date: "",
		passport: null,
		applicant: null,
		card_no: "",
		card_name: "",
		card_expiry: "",
		card_cvc: ""
	})
	/*const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		const res = await axios.get(getOrderUrl,{ params: {
			user_id: localStorage.getItem('token'),
			travelling_date: data.travelling_date,
			first_name: data.first_name,
			last_name: data.last_name,
			dob: data.dob,
			email: data.email,
			confirm_email: data.confirm_email,
			phone: data.phone,
			travel_purpose: data.travel_purpose,
			nationality: data.nationality,
			birth_country: data.birth_country,
			gender: data.gender,
			marital_status: data.marital_status,
			occupation: data.occupation,
			passport_no: data.passport_no,
			passport_issue_country: data.passport_issue_country,
			passport_issue_date: data.passport_issue_date,
			passport_expiry_date: data.passport_expiry_date,
			additional_citizenship: data.additional_citizenship,
			applicant_address: data.applicant_address,
			applicant_city: data.applicant_city,
			applicant_country: data.applicant_country,
			vat_invoice_required: data.vat_invoice_required,
			depature_date: data.depature_date,
			card_no: data.depature_date,
			card_name: data.depature_date,
			card_expiry: data.depature_date,
			card_cvc: data.depature_date,
			visa_type: localStorage.getItem('visa_type_token'),
			visa_country: localStorage.getItem('country')
		}});
		console.log(res);
		//props.history.push('/login');
		if(res.data.status === 1){
			//const token = res.data.token;
			//setToken(token);
			//localStorage.setItem('token', token);
			window.scrollTo(0, 0);
			document.body.scrollTop = 0;
			const successMessage = res.data.msg;
			setSuccessMessage(successMessage);
			const timer = setTimeout(() => { setActive(active + 1); }, 5000);
			return () => clearTimeout(timer);
		}else{
			window.scrollTo(0, 0);
			document.body.scrollTop = 0;
			const errorMessage = res.data.msg;
			setErrorMessage(errorMessage);
		}
		//setToken(token);
	}*/
	/*const handleChange = (name,value) => (e) => {
		console.log(name);
		setData({ ...data, [name]: value });
	};*/
	const handleSubmit = async e => {
		e.preventDefault();
		const dataArray = new FormData();
		dataArray.append("user_id", localStorage.getItem('token'));
		dataArray.append("travelling_date", data.travelling_date);
		dataArray.append("first_name", data.first_name);		
		dataArray.append("last_name", data.last_name);
		dataArray.append("dob", data.dob);
		dataArray.append("email", data.email);
		dataArray.append("confirm_email", data.confirm_email);
		dataArray.append("phone", data.phone);
		dataArray.append("travel_purpose", data.travel_purpose);
		dataArray.append("nationality", data.nationality);
		dataArray.append("birth_country", data.birth_country);
		dataArray.append("gender", data.gender);
		dataArray.append("marital_status", data.marital_status);
		dataArray.append("occupation", data.occupation);
		dataArray.append("passport_no", data.passport_no);
		dataArray.append("passport_issue_country", data.passport_issue_country);
		dataArray.append("passport_issue_date", data.passport_issue_date);
		dataArray.append("passport_expiry_date", data.passport_expiry_date);
		dataArray.append("additional_citizenship", data.additional_citizenship);
		dataArray.append("applicant_address", data.applicant_address);
		dataArray.append("applicant_city", data.applicant_city);
		dataArray.append("applicant_country", data.applicant_country);
		dataArray.append("vat_invoice_required", data.vat_invoice_required);
		dataArray.append("depature_date", data.depature_date);
		dataArray.append("passport",data.passport);
		dataArray.append("applicant", data.applicant);
		dataArray.append("card_no", data.depature_date);
		dataArray.append("card_name", data.depature_date);
		dataArray.append("card_expiry", data.depature_date);
		dataArray.append("card_cvc", data.depature_date);
		dataArray.append("visa_type", localStorage.getItem('visa_type_token'));
		dataArray.append("visa_country", localStorage.getItem('country'));
		axios.post(getOrderUrl, dataArray, {
			headers: {
			  "Content-Type": "multipart/form-data"
			}
		})
		.then((response) => {
			console.log(response);
		// successfully uploaded response
			if(response.data.status === 1){
				//const token = res.data.token;
				//setToken(token);
				//localStorage.setItem('token', token);
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				const successMessage = response.data.msg;
				setSuccessMessage(successMessage);
				const timer = setTimeout(() => { setActive(active + 1); }, 5000);
				return () => clearTimeout(timer);
			}else{
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				const errorMessage = response.data.msg;
				setErrorMessage(errorMessage);
			}
		})
		.catch((error) => {
		// error response
		});
	}
	function handleChange(name,newValue) {
      setData({ ...data, [name]: newValue });
    }
	
	
	
	
	
	return (
    <>
		<IndexNavbar />
		<div className="wrapper">
			<GetViasHeader />
			<div className="section Country_visa_details">
				<div className="content-center ">
					<Container>
						<Row>
							<Col md={{size:8, offset:2}} >
								<Card  className="text-dark ">
									<CardHeader className="text-center p-3 bg-dark text-light">
										<h4 className="m-0 text-uppercase">APPLY FOR VISA ONLINE{localStorage.getItem('country')+'skjhsjhsjs'}</h4>
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
												<Step label='Basic information'>
													<BasicInfo countries={countries} data={data} onChange={handleChange} />
												</Step>
												<Step label='Additional Information'>
													<AdditionalInfo countries={countries} data={data} onChange={handleChange} />
												</Step>
												<Step label='Payment'>
													<Payment countries={countries} data={data} onChange={handleChange} />
												</Step>
												<Step label='confirmation'>
													<Confirmation />
												</Step>
											</MultiStepForm>
									
											  {active !== 1 && (
												<Button onClick={() => setActive(active - 1)}>Previous</Button>
											  )}
											  {active < 3 && (
											  <Button onClick={() => setActive(active + 1)} style={{ float: 'right' }} >Next</Button>
											  )}
											  {active === 3 && (
												/*<Button onClick={() => setActive(active + 1)} style={{ float: 'right' }} >Save and continue</Button>*/
												<Button type="submit" style={{ float: 'right' }} >Save and continue</Button>
											  )}
	
											<div className="clearfix"></div>
										</div>
										{/* <Button color="primary" className="btn-block text-uppertcase">Apply For Visa</Button>
										<Button color="danger" className="btn-block text-uppertcase" onClick={handleCancel}>Cancel</Button> */}


									</CardBody>
									</Form>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</div>










			<Carousel />
			<DefaultFooter />
		</div>
    </>
  );
}

export default GetVisaFormpage;;