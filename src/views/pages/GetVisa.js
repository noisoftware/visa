import React from "react";
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
  Row,
  Col,
  // UncontrolledTooltip,
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import GetViasHeader from "../../components/Headers/GetvisaPageHeader.js";
import Carousel from "../sectionsBlock/top_visa_carousel.js";

function GetVisapage() {
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      <GetViasHeader />
       

        <div className="section requirements_slider">
              <Container>
             
              {/* flag holder */}
               
                    <h2 className="title text-center">Choose your destination country</h2>
                
                <div className="flag_holder">
                <Row>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/am.png").default}
                    ></img>
                    <p >Armenia</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/au.png").default}
                    ></img>
                    <p >Australia</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/az.png").default}
                    ></img>
                    <p >Azerbaijan</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/bs.png").default}
                    ></img>
                    <p >Bahamas</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/bh.png").default}
                    ></img>
                    <p >Bahrain</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/bd.png").default}
                    ></img>
                    <p >Bangladesh</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/bj.png").default}
                    ></img>
                    <p >Benin</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/br.png").default}
                    ></img>
                    <p >Brazil</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/kh.png").default}
                    ></img>
                    <p >Cambodia</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/ca.png").default}
                    ></img>
                    <p >Canada</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/co.png").default}
                    ></img>
                    <p >Colombia</p>
                    </Col>
                    <Col md="3" className="flags mb-3">
                    <img
                    alt="..."
                    className="pull-left mr-2"
                    src={require("../../assets/img/flagsb/eg.png").default}
                    ></img>
                    <p >Egypt</p>
                    </Col>
              
                </Row>
              
                </div>
              </Container>
            </div>


                  <Carousel />
                
        
        <DefaultFooter />
      </div>
    </>
  );
}

export default GetVisapage;
