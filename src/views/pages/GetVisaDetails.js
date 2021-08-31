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
import GetViasDetailsHeader from "../../components/Headers/getVisadetailsPageHeader.js";
import Carousel from "../sectionsBlock/top_visa_carousel.js";
const getVisaContentUrl = config.url.API_URL+"/get-visa-content";

function GetVisaDetailspage(props) {
  //const { country } = props.match.params.country;
  const [visaContent, setVisaContentData] = useState('visacontent');

	const getVisaContent = async () => {
		const res = await axios.get(getVisaContentUrl,{ params: { country: props.match.params.country }});
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
			<GetViasDetailsHeader country={props.match.params.country}/>
			<div className="section Country_visa_details">
				<Container dangerouslySetInnerHTML={{ __html: visaContent[0].content }}></Container>
			</div>
			<Carousel />
			<DefaultFooter />
		</div>
    </>
  );
}

export default GetVisaDetailspage;