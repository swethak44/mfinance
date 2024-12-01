import React from 'react';
import './contact.css';
import { Row,Col, Container } from 'react-bootstrap';
import kimage from './imgs/kimg.jpg';
import Cards from './Cards';
import Rmap from './Rmap';



export default function Contact() {
  
  return (
    <div>
        <div className='bimg'>
            <div class='text'>
                <h1 className='text-white'>Contact Us</h1>
                <p className='fs-5 p-3 '>
                    At Fincart, we believe every financial journey is unique. Our certified financial advisor are<br/>
                    here to help you with risk analysis, investment planning, and achieving your financial goals.
                </p>
            </div> 
        </div>

        <div className='bgrnd'>
          <div className="container">
            <Row>
              <Col lg={8}>
              <div className='tbox'>
                <h3 className='mt-5 p-4 fs-2'> Get in Touch</h3>
                <p >
                  Need advice or have questions? Contact us to schedule a discovery session with Fincart's Financial Planning Services. 
                  We'll assess your financial situation and create a plan just for you.
                </p>
              </div>

              <div className='fbox'>
                
                <h3 className='text-white'  >Contact the Financial Planning Team</h3>
                <div className='texts'>
                  <input type="text" class="field" placeholder=' Enter your Name' />
                  <input type="text" class="field" placeholder='Enter your Email' />
                  <input type="text" class="field" placeholder='Enter Phone Number' />
                </div>
                <button >
                  Submit
                </button>

              </div>  
              </Col>
              <Col lg={4}>
                <img className='d-block w-100' style={{marginTop:"80px",height:"350px"}} src={kimage} alt='' />
              </Col>
            </Row>
          </div>
        </div>
        
        <div className='row-2'>
          <Container>
              
            <Cards />
              
          </Container>
        </div>

        <div className='container'>
            <h1 className='text-center mt-5 '>Contact Info</h1>
          <div className='contact-section'>
            
          
            <div class="contact-item p-5">
              <div class="icon">
                <i class="fas fa-phone"></i> </div>
              <div class="info">
                <h3 className='text-center'>Number</h3>
                <p className='text-black'>+91-7247075470</p>
              </div>
            </div>

            <div class="contact-item p-5">
              <div class="icon">
                <i class="fas fa-envelope"></i> </div>
              <div class="info">
                <h3 className='text-center'>Email</h3>
                <p className='text-black'>info@fincart.com</p>
              </div>
            </div>

            <div class="contact-item p-4">
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i> </div>
              <div class="info">
                <h3 className='text-center'>Address</h3>
                <p className='text-black'>NCPL Tower Ground & 2nd Floor, A-4, A Block</p>
              </div>
            </div>



          </div>
          
        </div>
        
        {/* <div style={{marginBottom:"370px"}}>
          
            <Row>
              <Col lg={12}>
                <Gmap/>
              </Col>
          </Row>
          
        </div> */}
        <div>
            <Rmap />
        </div>
       
        
    </div>
  )
}
