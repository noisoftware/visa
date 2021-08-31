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


function RegisterPage(props) {
	
	const [firstname, setFirstName] = useState();
	const [lastname, setLastName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [accountType, setAccountType] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		const res = await axios.get(getRegisterUrl,{ params: { firstname: firstname, lastname: lastname, email: email, password: password, accounttype:accountType }});
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
				const timer = setTimeout(() => { props.history.push('/login'); }, 5000);
			return () => clearTimeout(timer);
		}else{
			window.scrollTo(0, 0);
			document.body.scrollTop = 0;
			const errorMessage = res.data.msg;
			setErrorMessage(errorMessage);
		}
		//setToken(token);
	}

	
  const [firstnameFocus, setFirstNameFocus] = React.useState(false);
  const [lastnameFocus, setLastNameFocus] = React.useState(false);
  const [accounttypeFocus, setAccountTypeFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confirmpasswordFocus, setConfirmPasswordFocus] = React.useState(false);
  
  React.useEffect(() => {
    document.body.classList.add("register-page");
	//document.body.classList.add("login-page");
    //document.body.classList.add("sidebar-collapse");
    //document.documentElement.classList.remove("nav-open");
  //  window.scrollTo(0, 0);
    //document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
//document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
     
		<IndexNavbar />
		<div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/bg6.jpg").default + ")",
          }}
          //ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
		  <h2>REGISTRATION FORM</h2>
           
          </Container>
        </div>
      </div>
			
				{/* <div className="page-header-image" style={{ backgroundImage:"url(" + require("../../assets/img/login.jpg").default + ")", }} ></div> */}
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
										  <span className="error"> {errorMessage} </span>
										)}
										{successMessage && (
										  <span className="success"> {successMessage} </span>
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
											<InputGroup className={"no-border input-lg" + (accounttypeFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input type="select" value={accountType} onChange={e => setAccountType(e.currentTarget.value)}>
													<option>Select Account Type</option>
													<option>Personal</option>
													<option>Corporate</option>
												</Input>
												
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
												<Input placeholder="Password..." type="password" onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} value={password} onChange={e => setPassword(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={"no-border input-lg" + (confirmpasswordFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Password..." type="password" onFocus={() => setConfirmPasswordFocus(true)} onBlur={() => setConfirmPasswordFocus(false)} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} ></Input>
											</InputGroup>
											
										</CardBody>
										<CardFooter className="text-center">
											<Button type="submit" className="btn-round" color="info"  size="lg" >Register</Button>
											{/* <Button type="submit" className="btn-round" color="info"  size="lg" >Back to Login</Button> */}
											<a className="btn-round btn btn-dark btn-lg" href="/login" >Back to Login</a>
											{/* <div className="pull-left">
												<h6>
													<a className="link" href="/login" >Back to<br/>Login</a>
												</h6>
											</div> */}
											
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
