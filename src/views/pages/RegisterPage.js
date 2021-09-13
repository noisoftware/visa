import React, { useState } from "react";
import useForm from "../../useForm";
import validate from '../../FormValidationRules';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import axios from "axios";
import { config } from '../../constant';
const getRegisterUrl = config.url.API_URL+"/register";

  

function RegisterPage(props) {
	
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(login, validate);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	
	function login() {
		console.log('No errors, submit callback called!');
		console.log(values);
		const dataArray = new FormData();
		dataArray.append("firstname", values.firstname);
		dataArray.append("lastname", values.lastname);
		dataArray.append("accounttype", values.accountType);		
		dataArray.append("email", values.email);
		dataArray.append("password", values.password);
		axios.post(getRegisterUrl, dataArray)
		.then((response) => {
			console.log(response);
		// successfully uploaded response
			if(response.data.status === 1){
				
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				const successMessage = response.data.msg;
				setSuccessMessage(successMessage);
				const timer = setTimeout(() => { props.history.push('/login'); }, 5000);
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
	
	const [firstnameFocus, setFirstNameFocus] = React.useState(false);
	const [lastnameFocus, setLastNameFocus] = React.useState(false);
	const [accounttypeFocus, setAccountTypeFocus] = React.useState(false);
	const [emailFocus, setEmailFocus] = React.useState(false);
	const [passwordFocus, setPasswordFocus] = React.useState(false);
	const [confirmpasswordFocus, setConfirmPasswordFocus] = React.useState(false);
  
	React.useEffect(() => {
		document.body.classList.add("register-page");	
		return function cleanup() {
			document.body.classList.remove("register-page");
			//document.body.classList.remove("sidebar-collapse");
		};
	}, []);
  
	return (
		<>
			<IndexNavbar />
			<div className="page-header page-header-small">
				<div className="page-header-image" style={{ backgroundImage: "url(" + require("../../assets/img/bg6.jpg").default + ")", }} ></div>
				<div className="content-center">
					<Container>
						<h2>REGISTRATION FORM</h2>
					</Container>
				</div>
			</div>
			<div className="content">
				<Container>
					<Col className="ml-auto mr-auto" md="8">
						<Card className="card-register mt-5">
							<Form className="form" method="" onSubmit={handleSubmit}>
							<CardHeader className="text-center p-3 bg-dark text-light">
								<h4 className="m-0">REGISTER NOW </h4>
							</CardHeader>
								<CardBody>
								{errorMessage && (
									  <span className="is-danger"> {errorMessage} </span>
									)}
									{successMessage && (
									  <span className="success"> {successMessage} </span>
									)}
								<InputGroup className={"no-border input-lg" + (firstnameFocus ? " input-group-focus" : "")} >
									<InputGroupAddon addonType="prepend">
										<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
									</InputGroupAddon>
									<Input placeholder="First Name..." type="text" onFocus={() => setFirstNameFocus(true)} onBlur={() => setFirstNameFocus(false)} name="firstname" onChange={handleChange} value={values.firstname || ''}  ></Input>
									{errors.firstname && ( <p className="help is-danger">{errors.firstname}</p> )}
								</InputGroup>
								
								<InputGroup className={ "no-border input-lg" + (lastnameFocus ? " input-group-focus" : "")} >
									<InputGroupAddon addonType="prepend">
										<InputGroupText>
											<i className="now-ui-icons text_caps-small"></i>
										</InputGroupText>
									</InputGroupAddon>
									<Input placeholder="Lastname..." type="text" onFocus={() => setLastNameFocus(true)} onBlur={() => setLastNameFocus(false)} name="lastname" onChange={handleChange} value={values.lastname || ''}  ></Input>
									{errors.lastname && ( <p className="help is-danger">{errors.lastname}</p> )}
								</InputGroup>
								
								<InputGroup className={"no-border input-lg" + (accounttypeFocus ? " input-group-focus" : "")} >
									<InputGroupAddon addonType="prepend">
										<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
									</InputGroupAddon>
									<Input type="select" name="accountType" onChange={handleChange} value={values.accountType || ''} >
										<option>Select Account Type</option>
										<option>Personal</option>
										<option>Corporate</option>
									</Input>
									{errors.accountType && ( <p className="help is-danger">{errors.accountType}</p> )}
								</InputGroup>
								
								<InputGroup className={"no-border input-lg" + (emailFocus ? " input-group-focus" : "")} >
									<InputGroupAddon addonType="prepend">
										<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
									</InputGroupAddon>
									<Input	placeholder="Email..." type="text" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} name="email" onChange={handleChange} value={values.email || ''} ></Input>
									{errors.email && ( <p className="help is-danger">{errors.email}</p> )}
								</InputGroup>									
								<InputGroup className={"no-border input-lg" + (passwordFocus ? " input-group-focus" : "")} >
									<InputGroupAddon addonType="prepend">
										<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
									</InputGroupAddon>
									<Input placeholder="Password..." type="password" onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} name="password" onChange={handleChange} value={values.password || ''} ></Input>
									{errors.password && ( <p className="help is-danger">{errors.password}</p> )}
								</InputGroup>									
								<InputGroup className={"no-border input-lg" + (confirmpasswordFocus ? " input-group-focus" : "")} >
									<InputGroupAddon addonType="prepend">
										<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
									</InputGroupAddon>
									<Input placeholder="Password..." type="password" onFocus={() => setConfirmPasswordFocus(true)} onBlur={() => setConfirmPasswordFocus(false)} name="confirmPassword" onChange={handleChange} value={values.confirmPassword || ''} ></Input>
									{errors.confirmPassword && ( <p className="help is-danger">{errors.confirmPassword}</p> )}
								</InputGroup>									
							</CardBody>
							<CardFooter className="text-center">
								<Button type="submit" className="btn-round" color="info"  size="lg" >Register</Button>
								<a className="btn-round btn btn-dark btn-lg" href="/login" >Back to Login</a>
							</CardFooter>
							</Form>
						</Card>
					</Col>
				</Container>
			</div>
			<DefaultFooter />
		</>
	);
}

export default RegisterPage;
