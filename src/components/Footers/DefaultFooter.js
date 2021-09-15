/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
// core components

function DefaultFooter() {
	return (
		<>
			<footer className="footer footer-default">
				<Container>
					<img alt="..." className="n-logo" src={require("../../assets/img/visite-logo-white.png").default} ></img>
					<nav>
						<ul>
							<li><a href="#" target="_blank" >Home</a></li>
							<li><a href="#" target="_blank" >Get Visa</a></li>
							<li><a href="#" target="_blank" >About Us</a></li>
							<li><a href="#" target="_blank" >Contact Us</a></li>              
						</ul>
					</nav>
					<div className="copyright" id="copyright">© {new Date().getFullYear()},VisiteVista  </div>
					<MessengerCustomerChat pageId="226579127441153" appId="885174415538327" />
				</Container>
			</footer>
		</>
	);
}

export default DefaultFooter;
