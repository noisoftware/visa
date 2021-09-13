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
const getForgotPasswordUrl = config.url.API_URL+"/forgot-password";


function ForgotPasswordPage(props) {
	
	const [email, setEmail] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		const res = await axios.get(getForgotPasswordUrl,{ params: {  email: email }});
		console.log(res);
		//props.history.push('/login');
		if(res.data.status === 1){
			
			const successMessage = res.data.msg;
			setSuccessMessage(successMessage);
			 const timer = setTimeout(() => {
			  props.history.push('/login');
			}, 5000); 
			return () => clearTimeout(timer);
			
		}else{
			const errorMessage = res.data.msg;
			setErrorMessage(errorMessage);
		}
		//setToken(token);
	}

	
  
  const [emailFocus, setEmailFocus] = React.useState(false);
  
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
		  <h2>Forgot Password</h2>
           
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
									<h4 className="m-0">Forgot Password?</h4>
									</CardHeader>
										<CardBody>
										{errorMessage && (
										  <span className="error"> {errorMessage} </span>
										)}
										{successMessage && (
										  <span className="success"> {successMessage} </span>
										)}
											<InputGroup className={"no-border input-lg" + (emailFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input	placeholder="Enter Your Registered Email..." type="text" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} value={email} onChange={e => setEmail(e.target.value)} ></Input>
											</InputGroup>
										</CardBody>
										<CardFooter className="text-center">
											<Button type="submit" className="btn-round" color="info"  size="lg" >Submit</Button>
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

export default ForgotPasswordPage;
