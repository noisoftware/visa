import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from '../../constant';



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

function GetViasDetailsHeader(props) {
	//console.log(props.country);
	const getTypeUrl = config.url.API_URL+"/get-types";
	const [types, setTypeData] = useState([]);
	const getTypeWithAxios = async () => {
		const response = await axios.get(getTypeUrl,{ params: { country: props.country.replace('-',' ') }});
		//console.log(response);
		const types = response.data.types;
		setTypeData(types);
		//console.log(posts);
	};
	
	useEffect(() => {
		getTypeWithAxios();
	}, []);
	const [visa_type_token, setVisaTypeToken] = useState();
	const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		console.log(visa_type_token);
		localStorage.setItem('visa_type_token', visa_type_token);
		localStorage.setItem('country', props.country.replace('-',' '));
		//if(!localStorage.getItem('token')){
			//window.location.href = '/login';
		//}else{			
			
			window.location.href = '/visa-form';
		//}
		//setToken(token);
	}
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>


		<div className="page-header page-header-small">
			<div className="page-header-image" style={{ backgroundImage: "url(" + require("../../assets/img/bg6.jpg").default + ")", }} ref={pageHeader} ></div>
			<div className="content-center ">
				<Container> 
					<Row>
						<Col md="4">
							<Card  className="text-dark ">
								<CardHeader>
									<h4 className="text-uppercase">APPLY FOR {props.country.replace('-',' ')} VISA ONLINE</h4>
								</CardHeader>
								<Form className="form" method="" onSubmit={handleSubmit}>                 
								<CardBody>
									<FormGroup>
										<Label for="exampleSelect">Purpose for travelSelect purpose</Label>
										<Input type="select" name="select" id="exampleSelect" className="rounded-0" value={visa_type_token} onChange={e => setVisaTypeToken(e.currentTarget.value)}>
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
						<Col md="8" className="text-left">
							
							<h1 className="title">{props.country.charAt(0).toUpperCase()+props.country.replace('-',' ').slice(1)}</h1>
							<h5>eVisa Application</h5>
						</Col>
					
					</Row>
				</Container>
			</div>
	

		</div>
		
    </>
  );
}

export default GetViasDetailsHeader;
