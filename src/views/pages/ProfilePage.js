import React, { useState, useEffect } from "react";
import useForm from "../../useForm";
import validate from '../../FormValidationRules';
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  ListGroup, ListGroupItem,FormGroup, Label, Input, Card, CardBody
} from "reactstrap";

// core components
//import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import axios from "axios";
import { config } from '../../constant';
const getUserVisaUrl = config.url.API_URL+"/get-user-visa";
const getUserUrl = config.url.API_URL+"/get-user";
const updateUserUrl = config.url.API_URL+"/update-user";

function ProfilePage(props) {
	const [pills, setPills] = React.useState("1");
  //const [user, setUser] = useState("");
	React.useEffect(() => {
		document.body.classList.add("profile-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
		return function cleanup() {
			document.body.classList.remove("profile-page");
			document.body.classList.remove("sidebar-collapse");
		};
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	
	const [visa, setVisa] = useState('');
	const getUserVisa = async () => {
		if(localStorage.getItem('token')){
			const res = await axios.get(getUserVisaUrl,{ params: { id:localStorage.getItem('token') }});
			const visa = res.data.visa;
			setVisa(res.data.visa);
			console.log(visa);
		}
		
	};
	
	
	
	const toggle = () => setIsOpen(!isOpen);

	/*function handleChange(event) {
		//props.onChange(event.target.name,event.target.value);
	}*/
	const [active, setActive] = useState(1);
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(register, validate, 'register',active,changeVal);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	function changeVal(){
	}
	function register() {
		console.log('No errors, submit callback called!');
		
		console.log(values);
		const dataArray = new FormData();
		dataArray.append("id", values.id);
		dataArray.append("firstname", values.firstname);
		dataArray.append("lastname", values.lastname);
		dataArray.append("accounttype", values.accountType);		
		dataArray.append("email", values.email);
		dataArray.append("password", values.password);
		axios.post(updateUserUrl, dataArray)
		.then((response) => {
			console.log(response);
		// successfully uploaded response
			if(response.data.status === 1){	
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;			
				const successMessage = response.data.msg;
				setSuccessMessage(successMessage);
				const timer = setTimeout(() => { setSuccessMessage('');; }, 5000);
				return () => clearTimeout(timer);
				
			}else{
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				const errorMessage = response.data.msg;
				setErrorMessage(errorMessage);
				const timer = setTimeout(() => { setErrorMessage('');; }, 5000);
				return () => clearTimeout(timer);
			}
		})
		.catch((error) => {
		// error response
		});
	}
	
	const [user, setUser] = useState({});
	const getUser = async () => {
		if(localStorage.getItem('token')){
			const res = await axios.get(getUserUrl,{ params: { id:localStorage.getItem('token') }});
			const user = res.data.user;
			setUser(res.data.user);
			values.id = user[0].id;
			values.firstname = user[0].first_name;
			values.lastname = user[0].last_name;
			values.email = user[0].email;
			values.accountType = user[0].account_type;
			values.password = user[0].password_text;
			values.confirmPassword = user[0].password_text;
			console.log(user);
			console.log(values);
		}
		
	};
	
	useEffect(() => {
		getUser();
		getUserVisa();
	}, []);

	if(!localStorage.getItem('token')){
	   window.location.href = '/login';
	}else{
		return (
		<>
		<IndexNavbar />
		<div className="wrapper">
			<ProfilePageHeader />
			<div className="section">
				<Container>
					<Col className="ml-auto mr-auto" md="6">
						<div className="nav-align-center">
							<Nav className="nav-pills-info " pills role="tablist" >
								<NavItem>
									<NavLink className={pills === "1" ? "active" : ""} href="#pablo" onClick={(e) => { e.preventDefault(); setPills("1"); }} >
									{/* <i className="now-ui-icons design_image"></i> */}
									My Application
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className={pills === "2" ? "active" : ""} href="#pablo" onClick={(e) => { e.preventDefault(); setPills("2"); }} >
									{/* <i className="now-ui-icons location_world"></i> */}
									My Setting
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className={pills === "3" ? "active" : ""} href="#pablo" onClick={(e) => { e.preventDefault(); localStorage.setItem("token",'');props.history.push('/login');/*setPills("3");*/ }} >
									{/* <i className="now-ui-icons sport_user-run"></i>  */}
									Logout
									</NavLink>
								</NavItem>
							</Nav>
						</div>
					</Col>
					<TabContent className="gallery" activeTab={"pills" + pills}>
						<TabPane tabId="pills1">
							<Col className="ml-auto mr-auto" md="10">
								<Row className="collections">
									<Col md="6">
										<h3 className="">Active ({visa.active && visa.active.length})</h3>
										<p className=" text-dark">
										intimate feel
										with a solid groove structure. An artist of considerable range.
										</p>
										<ListGroup>
											{ 
											visa.active && visa.active.map((vis,index)=>( 
											<ListGroupItem tag="a" key={index} href="#">{vis.name}</ListGroupItem>
											))}
											
										</ListGroup>
									</Col>
									<Col md="6">
										<h3 className="">Finished ({visa.finished && visa.finished.length})</h3>
										<p className=" text-dark">
										intimate feel
										with a solid groove structure. An artist of considerable range.
										</p>
										<ListGroup>
											{ 
											visa.finished && visa.finished.map((vis2,index2)=>( 
											<ListGroupItem disabled key={index2} href="#">{vis2.name}</ListGroupItem>
											))}
											
										</ListGroup>
									</Col>
								</Row>
							</Col>
						</TabPane>
						<TabPane tabId="pills2">
							<Col className="ml-auto mr-auto" md={{size:8, offset:2}}>
								<Card>
									<CardBody>          
										<div >
											<h3 style={{textAlign: 'center'}}>User Details </h3>
											{errorMessage && (
											  <span className="is-danger"> {errorMessage} </span>
											)}
											{successMessage && (
											  <span className="success"> {successMessage} </span>
											)}
											<FormGroup>
												<Label for="exampleSelect">First Name</Label>
												<Input type="text" placeholder="Enter your first name" name="firstname" onChange={handleChange} value={values.firstname || ''} />
												{errors.firstname && ( <p className="help is-danger">{errors.firstname}</p> )}
											</FormGroup>
											<FormGroup>
												<Label for="exampleSelect">Surname</Label>
												<Input type="text" placeholder="Enter your surname" name="lastname" onChange={handleChange} value={values.lastname || ''} />
												{errors.lastname && ( <p className="help is-danger">{errors.lastname}</p> )}
											</FormGroup>
											<FormGroup>
												<Label for="exampleSelect">Account Type</Label>
												<Input type="select" name="accountType" onChange={handleChange} value={values.accountType || ''} >
													<option>Select Account Type</option>
													<option>Personal</option>
													<option>Corporate</option>
												</Input>
												{errors.accountType && ( <p className="help is-danger">{errors.accountType}</p> )}
											</FormGroup>
											
											<FormGroup>
												<Label for="exampleSelect">Email Address</Label>
												<Input type="email" placeholder="Enter your e-mail" name="email" onChange={handleChange} value={values.email || ''} />
												{errors.email && ( <p className="help is-danger">{errors.email}</p> )}
											</FormGroup>
											<FormGroup>
												<Label for="exampleSelect">Password</Label>
												<Input type="password" placeholder="Enter your e-mail" name="password" onChange={handleChange} value={values.password || ''} />
												{errors.password && ( <p className="help is-danger">{errors.password}</p> )}
											</FormGroup>
											<FormGroup>
												<Label for="exampleSelect">Confirm Password</Label>
												<Input type="password" placeholder="Enter your e-mail" name="confirmPassword" onChange={handleChange} value={values.confirmPassword || ''} />
												{errors.confirmPassword && ( <p className="help is-danger">{errors.confirmPassword}</p> )}
											</FormGroup>
											
											
										</div>
										<Button onClick={handleSubmit}>Update</Button>
									</CardBody>
								</Card>
							</Col>
						</TabPane>
						<TabPane tabId="pills3">
							<Col className="ml-auto mr-auto" md="12">                    
								<h3 className="title">About me</h3>
								<h5 className="description text-dark">
								An artist of considerable range, Ryan — the name taken by
								Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
								and records all of his own music, giving it a warm, intimate feel
								with a solid groove structure. An artist of considerable range.
								</h5> 
							</Col>
						</TabPane>
					</TabContent>
				</Container>
			</div>
			<DefaultFooter />
		</div>
		</>
		);
	}
}

export default ProfilePage;
