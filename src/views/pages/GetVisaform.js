import React, { useState, useEffect } from "react";
import { config } from '../../constant';
import axios from "axios";
import { MultiStepForm, Step } from 'react-multi-form';

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
import GetViasHeader from "../../components/Headers/GetvisaPageHeader.js";

import BasicInfo from '../../components/form-steper/basic_information.js'
import AdditionalInfo from '../../components/form-steper/additional_info.js'
import Payment from '../../components/form-steper/Payment.js'
import Confirmation from '../../components/form-steper/Confirmation.js'
//import Button from '../../components/form-steper/button.js'




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
	const [active, setActive] = React.useState(1)
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
								<CardHeader className="text-center p-3 bg-dark text-light">
<h4 className="m-0 text-uppercase">APPLY FOR VISA ONLINE</h4>
									</CardHeader>
									
									<Form action="" className="form" method="">                 
									<CardBody >
	<div className="col-10 m-auto">
									<FormGroup>
											<div>Visa Type : {visaType[0].visa_type}</div>
											<div>Visa For Country : {localStorage.getItem('country')}</div>
										</FormGroup>


									<MultiStepForm activeStep={active} >
        <Step label='Basic information'>
          <BasicInfo/>
        </Step>
        <Step label='Additional Information'>
          <AdditionalInfo />
        </Step>
        <Step label='Payment'>
          <Payment />
        </Step>
	    <Step label='confirmation'>
          <Confirmation />
        </Step>
      </MultiStepForm>
									
	  {active !== 1 && (
        <Button onClick={() => setActive(active - 1)}>Previous</Button>
      )}
      {active !== 4 && (
        <Button
          onClick={() => setActive(active + 1)}
          style={{ float: 'right' }}
        >
          Save and continue
        </Button>
      )}
	
<div className="clearfix"></div>
</div>






										
										{/* <Button color="primary" className="btn-block text-uppertcase">Apply For Visa</Button>
										<Button color="danger" className="btn-block text-uppertcase" onClick={handleCancel}>Cancel</Button> */}


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