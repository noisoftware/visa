/*eslint-disable*/
import React from "react";

import { useState } from 'react';



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

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });


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
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/header.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("../../assets/img/now-logo.png").default}
            ></img>
            <h1 className="h1-seo">Travel Visa Requirements</h1>
            <h3>Apply online.</h3>


          <Col className="ml-auto mr-auto" md="8">
              <Card className="card-plain">
                <Form action="" className="form" method="">
                 
                  <CardBody>
                    

      <InputGroup>
      <Input />
        <InputGroupAddon addonType="prepend">
          <Button  size="lg" className="text-uppercase">Get Quote</Button>
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
