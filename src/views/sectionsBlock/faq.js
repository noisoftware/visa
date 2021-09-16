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
		<>			
			<Container>
				<h3>Visitevisa FAQ</h3>
				{ 
				faqs && faqs.map((faq,index)=>(
				
				<Card style={{ marginBottom: '1rem' }} key={index}>
					<CardHeader className="faq-header" onClick={toggle} data-event={index}>{faq.question}</CardHeader>
					<Collapse isOpen={collapse === index?true:false}>
						<CardBody className="faq-body" dangerouslySetInnerHTML={{ __html: faq.answer }}>
						
						</CardBody>
					</Collapse>
                </Card>
				))}
			</Container>			
		</>
	);
}

export default Faq;