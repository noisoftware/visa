import React, { useState, useEffect } from "react";
import { config } from '../../constant';
import axios from "axios";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  // Row,
  // Col,
  // UncontrolledTooltip,
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import GetViasHeader from "../../components/Headers/GetvisaPageHeader.js"
import Carousel from "../sectionsBlock/top_visa_carousel.js";
const getVerifyUserUrl = config.url.API_URL+"/verify-user";

function VerifyUser(props) {
  //const { country } = props.match.params.country;
  const [visaContent, setVisaContentData] = useState('verifyuser');

	const getVisaContent = async () => {
		const res = await axios.get(getVerifyUserUrl,{ params: { country: props.match.params.country }});
		//console.log(response);
		const visaContent = res.data.content;
		setVisaContentData(visaContent);
		//console.log(pageContent);
	};

	useEffect(() => {
		getVisaContent();
	}, []);
  return (
    <>
		<IndexNavbar />
		<div className="wrapper">
			<h2>Welcome to Visitevisa</h2>
			<div>Thank You <br/>You have registered successfully. Your Account has been activated. </div>
			<Carousel />
			<DefaultFooter />
		</div>
    </>
  );
}

export default VerifyUser;
