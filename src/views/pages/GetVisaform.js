import React, { useState, useEffect } from "react";
import { config } from '../../constant';
import axios from "axios";
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
import GetViasHeader from "../../components/Headers/GetvisaPageHeader.js"
import Carousel from "../sectionsBlock/top_visa_carousel.js";
const getVisaTypeUrl = config.url.API_URL+"/get-visa-type";

function GetVisaFormpage(props) {
	const [visaType, setVisaType] = useState('visatype');

	const getVisaType = async () => {
		const res = await axios.get(getVisaTypeUrl,{ params: { type: localStorage.getItem('visa_type_token') }});
		//console.log(response);
		const visaType = res.data.type;
		setVisaType(visaType);
		console.log(visaType);
	};

	useEffect(() => {
		getVisaType();
	}, []);
	
	const handleCancel = async e => {
		localStorage.removeItem('visa_type_token');
		localStorage.removeItem('country');
		window.location.href = '/index';
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
									<CardHeader>
										<h4 className="text-uppercase">APPLY FOR VISA ONLINE</h4>
									</CardHeader>
									<Form action="" className="form" method="">                 
									<CardBody>
										<FormGroup>
											<div>Visa Type : {visaType[0].visa_type}</div>
											<div>Visa For Country : {localStorage.getItem('country')}</div>
										</FormGroup>
										<Button color="primary" className="btn-block text-uppertcase">Apply For Visa</Button>
										<Button color="danger" className="btn-block text-uppertcase" onClick={handleCancel}>Cancel</Button>
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