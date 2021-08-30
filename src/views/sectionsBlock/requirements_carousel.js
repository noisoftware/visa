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
      //  CardBody,
        CardText,
         CardImg,
          CardImgOverlay 
} from "reactstrap";

//const getPostUrl = "http://localhost/admin/api/get-posts";
//const getPostUrl = "http://my-demo.xyz/visa/api/get-posts";
const getPostUrl = config.url.API_URL+"/get-posts";

function RequrementSlider() {

	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		cssEase: "linear",
		responsive: [
      
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
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
    
	const [posts, setPostData] = useState([]);

	

	const getPostsWithAxios = async () => {
		const response = await axios.get(getPostUrl);
		//console.log(response);
		const posts = response.data.posts;
		setPostData(posts);
		//console.log(posts);
	};
	
	useEffect(() => {
		getPostsWithAxios();
	}, []);
  
	return (
    <>
    
    <Slider {...settings} >
		{ 
		posts.map((post,index)=>(  
		<div className="p-2" key="">
			<Card inverse className="shadow-none base_holder">
				<CardImg width="100%" src={`http://my-demo.xyz/visa/assets/uploads/posts/${post.post_image}`} alt="Card image cap" />
				<CardImgOverlay>
					<CardTitle tag="h5">{post.title}</CardTitle>
					<CardText>
						<p dangerouslySetInnerHTML={{ __html: post.body.toString().substring(0,200) }}></p>
						<button className="btn-round border-none" color="white" to="/landing-page" tag={Link} >read more</button>
					</CardText>
				</CardImgOverlay>
			</Card>
		</div>
		))}
		
    </Slider>


    </>
  );
}

export default RequrementSlider;
