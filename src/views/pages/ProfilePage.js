import React, {useState} from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  ListGroup, ListGroupItem,FormGroup, Label, Input, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from "reactstrap";

// core components
//import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";

function ProfilePage(props) {
  const [pills, setPills] = React.useState("2");
  //const [user, setUser] = useState("");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function handleChange(event) {
    // Here, we invoke the callback with the new value
//console.log(event.target.value);
    props.onChange(event.target.name,event.target.value);
}

  if(!localStorage.getItem('token')){
	   window.location.href = '/login';
  }else{
  return (
    <>
  
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
     
        <div className="section">
          <Container>
            
            
              <Col className="ml-auto mr-auto" md="6">
                {/* <h4 className="title text-center">My Portfolio</h4> */}
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info "
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        {/* <i className="now-ui-icons design_image"></i> */}
                       My Application
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        {/* <i className="now-ui-icons location_world"></i> */}
                        My Setting
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        {/* <i className="now-ui-icons sport_user-run"></i>  */}
                        Logout
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                      <h3 className="">Ative (0)</h3>
            <p className=" text-dark">
              intimate feel
              with a solid groove structure. An artist of considerable range.
            </p> 

            <ListGroup>
      <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
    </ListGroup>




                      </Col>
                      <Col md="6">
                      <h3 className="">Finished (0)</h3>
           <p className=" text-dark">
              intimate feel
              with a solid groove structure. An artist of considerable range.
            </p> 


            <ListGroup>
      <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
    </ListGroup>






                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md={{size:8, offset:2}}>
                  <Card>
        <CardBody>
          
        <div >
		<h3 style={{textAlign: 'center'}}>BASIC INFORMATION </h3>
		<FormGroup>
			<Label for="exampleSelect">Planned day of travel</Label>
			<Input type="date" placeholder="select date" name="travelling_date" onChange={handleChange} />
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">First Name</Label>
			<Input type="text" placeholder="Enter your first name" name="first_name" onChange={handleChange} />
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Surname</Label>
			<Input type="text" placeholder="Enter your surname" name="last_name" onChange={handleChange} />
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">DOB</Label>
			<Input type="date" placeholder="select date" name="dob" onChange={handleChange} />
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Email Address</Label>
			<Input type="email" placeholder="Enter your e-mail" name="email" onChange={handleChange} />
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Email Address(re-enter)</Label>
			<Input type="email" placeholder="Enter your e-mail" name="confirm_email" onChange={handleChange} />
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Contact phone number</Label>
			<Input type="number" placeholder="Contact phone number" name="phone" onChange={handleChange} />
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Purpose for travel</Label>
			<Input type="select" id="travel_purpose" name="travel_purpose" onChange={handleChange} >
				<option value="">Select Travel Purpose</option>
				<option value="Business">Business</option>
				<option value="Tourism">Tourism</option>
			</Input>
		</FormGroup>
		<FormGroup>
			<Label for="exampleSelect">Nationality</Label>
			
			<Input type="select" id="nationality" name="nationality" onChange={handleChange} >
				<option value="">Select Nationality</option>
				{ 
				props.countries && props.countries.map((contry,index)=>( 
				<option key={index} value={contry.id}>{contry.nicename}</option> 
				))}
			</Input>
        </FormGroup>
	
		

    </div>
          
          
          
          
          
          
          <Button>Button</Button>
        </CardBody>
      </Card>
                      
                      
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="12">
                    
                      <h3 className="title">About me</h3>
            <h5 className="description text-dark">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5> 
                     
                  </Col>
                </TabPane>
              </TabContent>
            
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
  }
}

export default ProfilePage;
