import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import axios from "axios";
import { config } from '../../constant';
const getFaqUrl = config.url.API_URL+"/get-faqs";


function Faq() {
	const [faqs, setFaq] = useState('');
	const getFaqs = async () => {		
		const res = await axios.get(getFaqUrl);
		const faqs = res.data.faqs;
		setFaq(res.data.faqs);
		console.log(faqs);		
	};
	const [isOpen, setIsOpen] = useState(false);
	const [collapse, setCollapse] = useState(0);
	function toggle(e) {
		setIsOpen(!isOpen);
		let event = e.target.dataset.event;			
		setCollapse(Number(event));
		console.log(collapse);
      //setData({ ...data, [name]: newValue });
    }
	//const toggle = (e) => setIsOpen(!isOpen);
	useEffect(() => {
		getFaqs();
		
	}, []);
	
	return (
		<div className="section">			
			<Container className="faq-container">
				<h3 className="faq-title">Visitevisa FAQ</h3>
				{ 
				faqs && faqs.map((faq,index)=>(
				
				<Card className="faq-card" style={{ marginBottom: '0px' }} key={index}>
					<CardHeader className="faq-header" >{faq.question}<div className="faq-btn" onClick={toggle} data-event={index} >+</div></CardHeader>
					<Collapse isOpen={collapse === index?isOpen:false}>
						<CardBody className="faq-body" dangerouslySetInnerHTML={{ __html: faq.answer }}>
						
						</CardBody>
					</Collapse>
                </Card>
				))}
			</Container>			
		</div>
	);
}

export default Faq;