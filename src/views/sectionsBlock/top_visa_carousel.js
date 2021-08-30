import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from '../../constant';

// core components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
      Card,
      CardTitle,
      CardBody,
       CardText,
        CardImg,
        //  CardImgOverlay, 
         CardFooter

 } from "reactstrap";

//const getVSUrl = "http://localhost/admin/api/get-visa-services";
//const getVSUrl = "http://my-demo.xyz/visa/api/get-visa-services";
const getVSUrl = config.url.API_URL+"/get-visa-services";

function SimpleSlider() {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 10000,
      cssEase: "linear",
      responsive: [
      
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  
  const [visa_services, setData] = useState([]);

	

	const getVisaServicesWithAxios = async () => {
		const resp = await axios.get(getVSUrl);
		//console.log(response);
		const visa_services = resp.data.visa_services;
		setData(visa_services);
		//console.log(posts);
	};
	
	useEffect(() => {
		getVisaServicesWithAxios();
	}, []);
  
  return (
    <>
		<div className="top_most_slider_holder" >
			<h3 className="title text-center">Top 10 most requested visas</h3>
			<Slider {...settings} >
			{ 
			visa_services.map((visa_service,i)=>(  
				<div className="p-2" key="{i}">
					<Card  className="shadow-sm base_holder" to="/landing-page" tag={Link}>
						<CardImg width="100%" src={`http://my-demo.xyz/visa/assets/uploads/visa/${visa_service.image}`} alt="Card image cap" />
						<CardBody>
							<CardTitle tag="h5">{visa_service.name}</CardTitle>
							<CardText> From : {visa_service.price} </CardText>
						</CardBody>
						<CardFooter>{visa_service.valid_period} days </CardFooter>
					</Card>
				</div>
			))}
			</Slider>
		</div>

    </>
  );
}

export default SimpleSlider;
