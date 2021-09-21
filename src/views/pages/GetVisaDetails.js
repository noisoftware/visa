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
   CardText,
  CardTitle, CardSubtitle
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
		
			<div className="container dark mb-5">
		
		
		
			<GetViasDetailsHeader country={props.match.params.country}/>
			<div className=" Country_visa_details bg-light">
				<Row>
<Col sm="4" className="pt-4">
<div className="content-center apply-form">
								
						<Card  className="text-dark">
							<CardHeader className="p-4">
								<h5 className="text-uppercase" >APPLY FOR {props.match.params.country.replace('-',' ')}  VISA ONLINE</h5>
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
					
		</div>

</Col>
<Col sm="8" className="pt-4">
<Card>
        <CardBody>
          <CardTitle tag="h2">Armeina eVisa Information
</CardTitle>
          <CardText>
	<p>	  Armenia eVisa is an electronic visa introduced in 2014 by the Government of the Kingdom of Armeina in order to allow citizens of eligible countries to visit the country for tourism and business purposes.</p>
<p>The eVisa for Armeina is available as a single and multiple entry online visa and allows a stay from 14 to 90 days depending on its type.</p>
<p>eVisa is electronically linked to the applicant's passport, so visitors no longer need to go to a Armeina embassy to get a regular visa.</p>
<p>The cost of the Armeina eVisa depends on the type of entry selected:</p>
			  
			  <ul>
				  <li>69 Euro for a single 14-day stay</li>
				  <li>109 Euro for a 30-day stay with the possibility of multiple entries</li>
				  <li>249 Euro for a multiple-entry allowing a 90-day stay, valid for one year from the date of issue of the document.</li>
			  </ul>
<p>Keep reading for more information about eVisa types, prices, and application requirements.</p>


			  
			  </CardText>
        </CardBody>
      </Card>
	  <Card>
        <CardBody>
          <CardTitle tag="h2">Required documents</CardTitle>
          <CardText>
	<p>	  Time to apply! Citizens of all eligible countries (list above) can apply online with the following documents on hand:</p>
			  
			  <ul>
				  <li>the bio-data page of your valid passport, in electronic form (a digital photo)</li>
				  <li>a photo of return/onward ticket
</li>
				  <li>For most travelers, that's it! However, travelers from India and certain other countries are required to supply additional documentation. READ ON if you're an Indian citizen, or a citizen from any of the countries marked with *** or ** on the "Armeina eVisa: Am I eligible?" section, above.
</li>
			  </ul>
		<p>	  INDIAN CITIZENS ONLY: Please provide a copy of the photo page of the applicant's passport, plus a copy of the passport last page for Indian passports.</p>
<p>
IF YOUR COUNTRY IS MARKED *** in the "Armeina eVisa: Am I eligible?" section, above, please provide: Proof of a hotel booking in Armeina. If the traveler is staying with a relative, it may be necessary to provide a copy of the relative’s CPR Reader’s printout.</p>
<p>
IF YOUR COUNTRY IS MARKED ** in the "Armeina eVisa: Am I eligible?" section, above, please provide: Copy of a stamped bank statement under the applicant's name, covering the last three months, with a current balance of not less than the equivalent of BD300 (about USD800).</p>
<p>
ALL FOREIGN NATIONALS residing in GCC countries (GCC Visa) should provide the following:</p>

<ul>
				  <li>Scan or digital photo of the bio-data page of the applicant's passport
</li>
				  <li>Copy of return/onward ticket</li>
				  <li>Copy of a resident card from one of the GCC countries</li>
			  </ul>
			  
			  </CardText>
        </CardBody>
      </Card>
				{/* <Container dangerouslySetInnerHTML={{ __html: visaContent }}></Container> */}
			
				

<Faq />	

</Col>

				</Row>
	
			</div>
		
		</div>
		
			<DefaultFooter />




    </>
  );
}

export default GetVisaDetailspage;
