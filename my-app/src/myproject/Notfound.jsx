import React from "react";
import 'animate.css'
import { useEffect } from "react";
import WOW from 'wowjs';
import Container from 'react-bootstrap/esm/Container';

import { BsExclamationTriangle } from "react-icons/bs";


function Notfound(){

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
                    <h1 className="display-3 text-white animated slideInDown">Not Found</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#feg">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">404</li>
                        </ol>
                    </nav>
                </div>
            </div>
  </Container>

  </Container>
</div>
                                          {/* NOT FOUND */}

<Container>
<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style={{visibility:"visible", animationDelay:"0.1s", animationNname:"fadeInUp"}} >
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="triangle display-1"><BsExclamationTriangle /></i>
                    <h1 className="fournot display-1 mt-3">404</h1>
                    <h1 className="pagefound mb-4">Page Not Found</h1>
                    <p className="errortxt mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <a className="notbtn rounded-pill py-3 px-5" href="/">Go Back To Home</a>
                </div>
            </div>
        </div>
    </div>
</Container> 
           
 
        </div>
    )
}
export default Notfound;