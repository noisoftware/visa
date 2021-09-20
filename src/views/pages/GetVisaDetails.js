import React, { useState, useEffect } from "react";
import { config } from '../../constant';
import axios from "axios";
// import { Link } from "react-router-dom";
// reactstrap components

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
import GetViasDetailsHeader from "../../components/Headers/getVisadetailsPageHeader.js";
import Carousel from "../sectionsBlock/top_visa_carousel.js";
import Faq from "../sectionsBlock/faq.js";
const getVisaContentUrl = config.url.API_URL+"/get-visa-content";
const getTypeUrl = config.url.API_URL+"/get-types";

function GetVisaDetailspage(props) {
  //const { country } = props.match.params.country;
	
	
	const [types, setTypeData] = useState([]);
	const getTypeWithAxios = async () => {
		const response = await axios.get(getTypeUrl,{ params: { country: props.match.params.country.replace('-',' ') }});
		//console.log(response);
		const types = response.data.types;
		setTypeData(types);
		//console.log(posts);
	};
	const [visa_type_token, setVisaTypeToken] = useState();
	const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		console.log(visa_type_token);
		localStorage.setItem('visa_type_token', visa_type_token);
		localStorage.setItem('country', props.match.params.country.replace('-',' '));
		window.location.href = '/visa-form';
		
	}
	const [visaContent, setVisaContentData] = useState('visacontent');
	const getVisaContent = async () => {
		const res = await axios.get(getVisaContentUrl,{ params: { country: props.match.params.country }});
		//console.log(response);
		if(res.data.status == 1){
			const visaContent = res.data.content[0].content;
			setVisaContentData(visaContent);
		}else{
			const visaContent = '<p style="text-align: center; border: 1px solid #888888; color: #888888; padding: 10px;">'+res.data.content+'</p>';
			setVisaContentData(visaContent);
		}
		//console.log(pageContent);
	};

	useEffect(() => {
		getVisaContent();
		getTypeWithAxios();
	}, []);
  return (
    <>
		<IndexNavbar />
		<div className="content-center apply-form">
			<Container> 
				<Row>
					<Col md="12">
						
						<Card  className="text-dark ">
							<CardHeader>
								<h4 className="text-uppercase" >APPLY FOR {props.match.params.country.replace('-',' ')}  VISA ONLINE</h4>
							</CardHeader>
							<Form className="form" method="" onSubmit={handleSubmit}>                 
							<CardBody>
								<FormGroup>
									<Label for="exampleSelect">Purpose for travelSelect purpose</Label>
									<Input type="select" name="select" id="exampleSelect" className="rounded-0" value={visa_type_token} onChange={e => setVisaTypeToken(e.currentTarget.value)} >
										<option>Select Visa Type</option>
										{ 
											types && types.map((typ,index)=>( 
											<option key={index} value={typ.id}>{typ.visa_type}</option> 
											))}
									</Input>
								</FormGroup>
								<Button type="submit" color="primary" className="btn-block text-uppertcase">Apply Online</Button>{' '}
							</CardBody>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="wrapper">
			<GetViasDetailsHeader country={props.match.params.country}/>
			<div className="section Country_visa_details">
				<Container dangerouslySetInnerHTML={{ __html: visaContent }}></Container>
			</div>
			<Faq />		
			
			<DefaultFooter />
		</div>
    </>
  );
}

export default GetVisaDetailspage;
