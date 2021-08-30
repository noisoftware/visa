import React from "react";

// reactstrap components
import {
  Button,
  Label,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Card,
  CardBody,
  CardHeader,
  // UncontrolledTooltip,
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import ContactHeader from "../../components/Headers/ContactPageHeader.js";

function ContactUspage() {
 

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      <ContactHeader />
        <div className="section">
      
          <Container>
            
            

<Row>
<Col md="6">

<h3 className="title"> Contact</h3>
            <h5 >
            If you need help, our expert department is at your disposal:
            </h5>
           
<p><strong>E-mail:</strong> support@evisa.express</p>
<h6>Helpline:</h6>
EN +44 2031 293 603

<p>5 days a week from 8am to 4pm (GMT+1)</p>

</Col>
<Col md="6">

<Card>
  <CardHeader className="p-3">
  <h3 className="title m-0 pt-0 ">Inquiries form</h3>
  </CardHeader>
<CardBody>
<Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Name</Label>
            <Input type="text" name="name" id="examplePassword" placeholder="Name placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input rows="3" type="textarea" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
     
     
     
      <Button  className="bg-blue">Sign in</Button>
    </Form>



</CardBody>

</Card>

</Col>
</Row>

</Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ContactUspage;
