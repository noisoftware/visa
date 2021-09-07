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
const getLoginUrl = config.url.API_URL+"/login";


function LoginPage(props) {
	
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [token, setToken] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		const res = await axios.get(getLoginUrl,{ params: { email: email, password: password }});
		console.log(res);
		
		if(res.data.status === 1){
			const token = res.data.token;
			setToken(token);
			localStorage.setItem('token', token);
			if(!localStorage.getItem('visa_type_token')){
				props.history.push('/profile');
			}else{
				props.history.push('/visa-form');
			}
		}else{
			const errorMessage = res.data.msg;
			setErrorMessage(errorMessage);
		}
		//setToken(token);
	}

	
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
								<Card className="card-login">
									<Form className="form" method="" onSubmit={handleSubmit}>
										{/* <CardHeader className="text-center">
											<div className="logo-container">
												<img alt="..." src={require("../../assets/img/now-logo.png").default} ></img>
											</div>
										</CardHeader> */}
										<CardHeader className="text-center p-3 bg-dark text-light">
<h4 className="m-0">LOGIN NOW </h4>
									</CardHeader>
										<CardBody>
										{errorMessage && (
										  <p className="error"> {errorMessage} </p>
										)}
											<InputGroup className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Email..." type="text" onFocus={() => setFirstFocus(true)} onBlur={() => setFirstFocus(false)} value={email} onChange={e => setEmail(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={ "no-border input-lg" + (lastFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="now-ui-icons text_caps-small"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Password..." type="password" onFocus={() => setLastFocus(true)} onBlur={() => setLastFocus(false)} value={password} onChange={e => setPassword(e.target.value)} ></Input>
											</InputGroup>
										</CardBody>
										<CardFooter className="text-center p-3">
											<Button type="submit" className="btn" color="black"  >Login</Button>
											<div className="pull-left">											
													<h2><a className="link" href="/register">Create Account</a></h2>												
											</div>
											<div className="pull-right">
											<h2>	<a className="link" href="/forgot-password" >Forgot Password?</a></h2>
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
