import React from "react";
import Container from 'react-bootstrap/esm/Container';
import Testimonial1 from './img/testimonial-1.jpg';
import Testimonial2 from './img/testimonial-2.jpg';
import Testimonial3 from './img/testimonial-3.jpg';
import Testimonial4 from './img/testimonial-4.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from "react";
import WOW from 'wowjs';
import 'animate.css';

function Testimoniall(){
   
  const testimonials = [
    { id: 1, imageSrc: Testimonial1, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
    { id: 2, imageSrc: Testimonial2, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
    { id: 3, imageSrc: Testimonial3, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
    { id: 4, imageSrc: Testimonial4, name:'Client Name', profession:'Profession', details:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.' },
  ];

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    customPaging: () => <div className="custom-indicator"></div>,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          centerPadding: '0',
        },
      },
    ],
  };

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
                    <h1 className="display-3 text-white animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#jef">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
  </Container>

  </Container>
</div>
                                                 {/* TESTIMONIAL */}

<div className='sec-6'>
  <Container className='sec6-con'>
  <div className='wow fadeInUp' data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
    <div className='d-inline position-relative'><div className='ins-line1 position-absolute'></div>
  <div className='ins-line2 position-absolute'></div> <h6 className='sec4-h6 mb-1'> TESTIMONIAL </h6>
  <div className='ins-line3 position-absolute'></div><div className='ins-line4 position-absolute'></div></div>
        <h1 className='sec4-h1 mb-4'>Our Students Say!</h1></div>

  <div className="carousel-container w-100 wow fadeInUp" data-wow-delay="0.1s" style={{animationDelay:'0.1s', animationName:'fadeInUp', visibility:'visible'}}>
      <Slider {...settings}> 
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.imageSrc} alt={`Testimonial ${testimonial.id}`} className=' border rounded-circle p-2 mx-auto mb-3' style={{height:"80px", width:"80px",}} />

            <div className="details-container">
              <h5 className='testi-name'>{testimonial.name}</h5>
              <p className='testi-profession'>{testimonial.profession}</p>
              <div className='testi-p p-2 py-4 px-3'><p className='testi-txt'>{testimonial.details}</p></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</Container>
    </div>

 
        </div>
    )
}
export default Testimoniall;