/*eslint-disable*/
import React, { useState,useEffect } from "react";
import axios from "axios";
import { config } from '../../constant';


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
const getCountryUrl = config.url.API_URL+"/get-country";

function IndexHeader() {
	let pageHeader = React.createRef();
  
	const [countries, setCountries] = useState();
	const [country, setCountry] = useState();
	const getCountries = async () => {
		const res = await axios.get(getCountryUrl);
		//console.log(res.data.countries);
		const countries = res.data.countries;
		setCountries(countries);;
		console.log(countries);
	};
	
	const handleSubmit = async e => {
		e.preventDefault();
		window.location.href = '/getvisadetails/'+country.toLowerCase();
		//console.log(country.toLowerCase());
	}
	useEffect(() => {
		getCountries();
	}, []);

	const [countryFocus, setCountryFocus] = React.useState(false);
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

  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  // React.useEffect(() => {
  //   document.body.classList.add("login-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("login-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // }, []);
 



	return (
		<>
			<div className="page-header clear-filter" >
				<div className="page-header-image" style={{ backgroundImage: "url(" + require("../../assets/img/header.jpg").default + ")", }} ref={pageHeader} ></div>
				<Container>
					<div className="content-center brand">
						<img alt="..." className="n-logo" src={require("../../assets/img/now-logo.png").default} ></img>
						<h1 className="h1-seo">Travel Visa Requirements</h1>
						<h3>Apply online.</h3>
						<Col className="ml-auto mr-auto" md="8">
							<Card className="card-plain">
								<Form className="form" method="" onSubmit={handleSubmit}>
								<CardBody>
									<InputGroup className={"no-border input-lg" + (countryFocus ? " input-group-focus" : "")}>
										<Input type="select" onFocus={() => setCountryFocus(true)} onBlur={() => setCountryFocus(false)} value={country} onChange={e => setCountry(e.currentTarget.value)} >
											<option>Select Destination Country</option>
											{ 
											countries && countries.map((contry,index)=>( 
											<option key={index} value={contry.nicename}>{contry.nicename}</option> 
											))}
										</Input>
										<InputGroupAddon addonType="prepend">
											<Button type="submit" size="lg" className="text-uppercase">Apply Now</Button>
										</InputGroupAddon>
									</InputGroup>
								</CardBody>
								</Form>
								
							</Card>
						</Col>
					</div>
				</Container>
			</div>
		</>
  );
}

export default IndexHeader;
