import React from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaGraduationCap } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import Aboutimg from './img/about.jpg';
import Team1 from './img/team-1.jpg';
import Team2 from './img/team-2.jpg';
import Team3 from './img/team-3.jpg';
import Team4 from './img/team-4.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

function About() {

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  

return(
    <div>
  
  
<div>
  <Container fluid className='navpage-con py-5 mb-5 page-header'>
  <Container className='py-5'>
  <div class="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#df">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
  </Container>

  </Container>
</div>


<div className='sec2'>
  <Container className='cardsec py-4'>
  <Row lg={4} md={2} sm={2} xs={1}>
  <Col className='wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>  
    <Card  className='cards'>
     <Card.Body>
       <div className='cardIcon ' style={{ fontSize:"50px", }}> <FaGraduationCap /></div>
        <Card.Title>Skilled Instructors</Card.Title>
        <Card.Text>
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </Card.Text> </Card.Body> </Card>
      </Col>
<Col className='wow fadeInUp' data-wow-delay="0.3s" style={{animationDelay:'0.3s', animationName:'fadeInUp', visibility:'visible'}}>
  <Card className='cards'>
      <Card.Body>
        <div className='cardIcon'><FaGlobe /></div>
        <Card.Title>Online Classes</Card.Title>
        <Card.Text>
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </Card.Text> </Card.Body> </Card>
  </Col>
  <Col className='wow fadeInUp' data-wow-delay="0.5s" style={{animationDelay:'0.5s', animationName:'fadeInUp', visibility:'visible'}}>
        <Card className='cards'>
      <Card.Body>
        <div className='cardIcon'><FaHome /></div>
        <Card.Title>Home Projects</Card.Title>
        <Card.Text>
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </Card.Text> </Card.Body> </Card>
</Col>
  <Col className='wow fadeInUp' data-wow-delay="0.7s" style={{animationDelay:'0.7s', animationName:'fadeInUp', visibility:'visible'}}>
        <Card className='cards'>
      <Card.Body>
        <div className='cardIcon'><FaBookOpen /></div>
        <Card.Title>Book Library</Card.Title>
        <Card.Text>
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </Card.Text> </Card.Body> </Card>
   </Col>
   </Row>
     </Container>
    </div>


    <div className='sec-2'>
    <Container>
     <Row lg ={2} md={1} sm={1} xs={1}>
       <Col className='col1 wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s',animationName:'fadeInUp', visibility:'visible'}}>
          <img src={Aboutimg} alt="no" className='pic1 w-100'/></Col>
        <Col className='wow fadeInUp' data-wow-delay="0.3s" style={{animationDelay:'0.3s', animationName:'fadeInUp', visibility:'visible'}}><div className='info1'>
          <div><h4>ABOUT US</h4><div className='line1'></div><div className='line2'></div></div>
           <h1 className='mt-3'>Welocome to eLearning</h1>
            <p className='mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            <p className='mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p></div>
     <div className='Advantage'>
     <Row lg ={2} md={2} sm={2} xs={1} className='rows wow fadeInUp' data-wow-delay="0.3s" style={{animationDelay:'0.3s', animationName:'fadeInUp', visibility:'visible'}}>
        <Col>< FaArrowRight className='Abticon'/> Skilled Instructors</Col>
        <Col>< FaArrowRight className='Abticon'/> Online Classes</Col>
      </Row>
      <Row lg ={2} md={2} sm={2} xs={1} className='rows'>
        <Col>< FaArrowRight className='Abticon'/> International Certificate</Col>
        <Col>< FaArrowRight className='Abticon'/> Skilled Instructors</Col>
      </Row>
      <Row lg ={2} md={2} sm={2} xs={1} className='rows'> 
        <Col>< FaArrowRight className='Abticon'/> Online Classes</Col>
        <Col>< FaArrowRight className='Abticon'/> International Certificate</Col>
      </Row>
     </div>
    <Link to='/' className='abt-bt mt-3'>Read More</Link>
        </Col>
      </Row>
     
    </Container>
    </div>


    <div className='sec-5 '>
   <Container className='sec5-con'>
    <div className='wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <div className='d-inline position-relative'><div className='ins-line1 position-absolute'></div><div className='ins-line2 position-absolute'></div> <h6 className='sec4-h6'> INSTRUCTORS </h6><div className='ins-line3 position-absolute'></div><div className='ins-line4 position-absolute'></div></div>
        <h1 className='sec4-h1 mb-4'>Expert Instructors</h1></div>
    <Row g={4}>
      <Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <Card className='sec5-cards '>
        <div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team1} className='expert' /></div>
      <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
       </Col>
   <Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.3s" style={{animationDelay:'0.3s', animationName:'fadeInUp', visibility:'visible'}}>
      <Card className='sec5-cards'>
      <div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team2} className='expert' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1 mx-5'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
  </Col>
<Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.5s" style={{animationDelay:'0.5s', animationName:'fadeInUp', visibility:'visible'}}>
<Card className='sec5-cards'>
<div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team3} className='expert' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
</Col>
<Col lg={3} md={6} className='wow fadeInUp' data-wow-delay="0.7s" style={{animationDelay:'0.7s', animationName:'fadeInUp', visibility:'visible'}}>
<Card className='sec5-cards overflow-hidden'>
<div className="instruct-img overflow-hidden"><Card.Img variant="top" src={Team4} className='expert w-100 h-100' /></div>

     <div className='social-media position-relative d-flex justify-content-center' style={{marginTop:"-24px"}}>
      <div className='s5-Ico d-flex justify-content-center pt-2 px-1'>
        <a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaFacebookF /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaTwitter /></i></a>
<a className='fb-ico btn btn-sm-square btn-primary mx-1' href><i><FaInstagram /></i></a>
      </div>
     </div>

     <div><h5 className='Names mt-3'>Instructor Name</h5>
           <p className='desig mb-2'>Designation</p></div>
    </Card>
</Col>

    </Row>
   </Container>
  </div>

  
    </div>
)
}

export default About;