import React from "react";
import { Link } from "react-router-dom";
import HomeContent from "../sectionsBlock/home_content.js";
import TopCarousel from "../sectionsBlock/top_visa_carousel.js";
import RequrementSlider from "../sectionsBlock/requirements_carousel.js";


// reactstrap components
import {
  // Button,
  Container,
  Row,
  Col,
} from "reactstrap";


	
	
function VisiteVisaStep() {
  
  return (
    <>
    
       
		<HomeContent />
			<div className="section requirements_slider">
				<div className="requrement_slider_holder">
					<Container>
						<Row>
							<Col md="12">
								<h3 className="title m-0">Requirements to meet for an eVisa</h3>
								<p>Before applying, please make sure that you have the following:</p>
							</Col>
							<Col md="12" >
								<RequrementSlider />
							</Col>
						</Row>
					</Container>
				</div>
				<Container>
					{/* flag holder */}
					<Row>
						<Col md="12" className="text-center">
							<h3 className="title mb-5">Choose your destination country</h3>
						</Col>
					</Row>
					<div className="flag_holder">
					<Row>
						<Col to="/getvisadetails/armenia" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/am.png").default} ></img>
							<p >Armenia</p>
						</Col>
						<Col to="/getvisadetails/australia" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/au.png").default} ></img>
							<p >Australia</p>
						</Col>
						<Col to="/getvisadetails/azerbaijan" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/az.png").default} ></img>
							<p >Azerbaijan</p>
						</Col>
						<Col to="/getvisadetails/bahamas" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/bs.png").default} ></img>
							<p >Bahamas</p>
						</Col>
						<Col to="/getvisadetails/bahrain" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/bh.png").default} ></img>
							<p >Bahrain</p>
						</Col>
						<Col to="/getvisadetails/bangladesh" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/bd.png").default} ></img>
							<p >Bangladesh</p>
						</Col>
						<Col to="/getvisadetails/benin" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/bj.png").default} ></img>
							<p >Benin</p>
						</Col>
						<Col to="/getvisadetails/brazil" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/br.png").default} ></img>
							<p >Brazil</p>
						</Col>
						<Col to="/getvisadetails/cambodia" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/kh.png").default} ></img>
							<p >Cambodia</p>
						</Col>
						<Col to="/getvisadetails/canada" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/ca.png").default} ></img>
							<p >Canada</p>
						</Col>
						<Col to="/getvisadetails/colombia" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/co.png").default} ></img>
							<p >Colombia</p>
						</Col>
						<Col to="/getvisadetails/egypt" tag={Link} md="3" className="flags mb-3">
							<img alt="..." className="pull-left mr-2" src={require("../../assets/img/flagsb/eg.png").default} ></img>
							<p >Egypt</p>
						</Col>
					</Row>
    
				</div>
			</Container>
		</div>
		<TopCarousel />
    </>
  );
}

export default VisiteVisaStep;
