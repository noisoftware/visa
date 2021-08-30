import React, { useState } from "react";

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
//const getLoginUrl = "http://localhost/admin/api/login";
//const getLoginUrl = "http://my-demo.xyz/visa/api/login";
const getRegisterUrl = config.url.API_URL+"/register";


function LoginPage(props) {
	
	const [firstname, setFirstName] = useState();
	const [lastname, setLastName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();
	const [zipcode, setZipCode] = useState();
	const [gender, setGender] = useState();
	//const [token, setToken] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		const res = await axios.get(getRegisterUrl,{ params: { firstname: firstname, lastname: lastname, email: email, password: password, phone: phone, address: address, zipcode: zipcode, gender: gender }});
		console.log(res);
		props.history.push('/login');
		/*if(res.data.status === 1){
			//const token = res.data.token;
			//setToken(token);
			//localStorage.setItem('token', token);
			props.history.push('/login');
		}else{
			const errorMessage = res.data.msg;
			setErrorMessage(errorMessage);
		}*/
		//setToken(token);
	}

	
  const [firstnameFocus, setFirstNameFocus] = React.useState(false);
  const [lastnameFocus, setLastNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [phoneFocus, setPhoneFocus] = React.useState(false);
  const [addressFocus, setAddressFocus] = React.useState(false);
  const [zipcodeFocus, setZipCodeFocus] = React.useState(false);
  const [genderFocus, setGenderFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      {/* <ExamplesNavbar /> */}
		<IndexNavbar />
			<div className="page-header clear-filter" filter-color="blue">
				<div className="page-header-image" style={{ backgroundImage:"url(" + require("../../assets/img/login.jpg").default + ")", }} ></div>
					<div className="content">
						<Container>
							<Col className="ml-auto mr-auto" md="4">
								<Card className="card-login card-plain">
									<Form className="form" method="" onSubmit={handleSubmit}>
										<CardHeader className="text-center">
											<div className="logo-container">
												<img alt="..." src={require("../../assets/img/now-logo.png").default} ></img>
											</div>
										</CardHeader>
										<CardBody>
										{errorMessage && (
										  <p className="error"> {errorMessage} </p>
										)}
											<InputGroup className={"no-border input-lg" + (firstnameFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="First Name..." type="text" onFocus={() => setFirstNameFocus(true)} onBlur={() => setFirstNameFocus(false)} value={firstname} onChange={e => setFirstName(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={ "no-border input-lg" + (lastnameFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="now-ui-icons text_caps-small"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Lastname..." type="text" onFocus={() => setLastNameFocus(true)} onBlur={() => setLastNameFocus(false)} value={lastname} onChange={e => setLastName(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={"no-border input-lg" + (emailFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input	placeholder="Email..." type="text" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} value={email} onChange={e => setEmail(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={"no-border input-lg" + (passwordFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Password..." type="text" onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} value={password} onChange={e => setPassword(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={"no-border input-lg" + (phoneFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Phone..." type="text" onFocus={() => setPhoneFocus(true)} onBlur={() => setPhoneFocus(false)} value={phone} onChange={e => setPhone(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={"no-border input-lg" + (genderFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Gender..." type="text" onFocus={() => setGenderFocus(true)} onBlur={() => setGenderFocus(false)} value={gender} onChange={e => setGender(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={"no-border input-lg" + (addressFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Address..." type="text" onFocus={() => setAddressFocus(true)} onBlur={() => setAddressFocus(false)} value={address} onChange={e => setAddress(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={"no-border input-lg" + (zipcodeFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Zipcode..." type="text" onFocus={() => setZipCodeFocus(true)} onBlur={() => setZipCodeFocus(false)} value={zipcode} onChange={e => setZipCode(e.target.value)} ></Input>
											</InputGroup>
											
										</CardBody>
										<CardFooter className="text-center">
											<Button type="submit" className="btn-round" color="info"  size="lg" >Register</Button>
											<div className="pull-left">
												<h6>
													<a className="link" href="/login" >Back to<br/>Login</a>
												</h6>
											</div>
											
										</CardFooter>
									</Form>
								</Card>
							</Col>
						</Container>
					</div>
       
				</div>
			<DefaultFooter />
    </>
  );
}

export default LoginPage;
