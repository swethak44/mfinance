import React from 'react';
import './loans.css';
import { Container,Row,Col } from 'react-bootstrap';
import pimage from './imgs/pimg.jpg';

export default function Loans() {
  return (
    <div>
        <div className='bgimg'>
            <div class='text'>
                <h1>Transforming your aspirations into reality</h1>
                <p className='text-black p-4 '>
                    At Fincart, we are a premier Direct Selling Agent (DSA) dedicated to providing tailored loans.<br/>
                    Our goal is to streamline your loan process, making it accessible and straightforward.

                </p>
            </div>
            
        </div>
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2>Find Your Ideal Loan Terms with Our Expert Guidance</h2>
                        <p className='text-black' style={{textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                            At Fincart, we are a premier Direct Selling Agent (DSA) dedicated to providing tailored loans. 
                            Our goal is to streamline your loan process, making it accessible and straightforward. With a team of 
                            experienced professionals, we offer expert guidance and support throughout every stage of your loan journey.
                        </p>
                        <p className='text-black' style={{textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                            We understand that each financial situation is unique, which is why we provide personalized loan options 
                            designed to meet your specific needs. Our commitment to transparency means youll receive clear information 
                            about your loan terms and conditions, ensuring there are no surprises along the way.
                        </p>
                        <p className='text-black' style={{textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                            At Fincart, customer satisfaction is our top priority. We work tirelessly to deliver a seamless experience, 
                            from application to disbursement, and strive to be your trusted partner in achieving your financial goals. 
                            Whether you need funds for personal expenses, travel, or any other purpose, we are here to help you secure 
                            the loan thats right for you
                        </p>

                    </Col>
                    <Col lg={6}>
                        <img className='d-block w-100 ' style={{marginTop:"80px"}} src={pimage} alt=' '/>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row>
                    <h2 className='mt-4 p-3'>Better Than All: Fincart’s Home Loans</h2>
                    <Col lg={12}>
                    <ul>
                        <li className='fw-semibold fs-5'>Client-Centric Approach :</li>
                        <p className='fw-light' style={{color:"black",textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                            We at Fincart prioritize your needs, offering the most competitive rates,tailored solutions and
                            end-to-end services right at your doorstep to meet your specific home loan requirements.
                        </p>
                        <li className='fw-semibold fs-5'>Robust Privacy Measures :</li>
                        <p className='fw-light' style={{color:"black",textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                            We prioritize your privacy with state-of-the-art encryption and secure data handling practices,
                            ensuring that your personal and fanancial information remains confidential throught the loan process.
                        </p>
                        <li className='fw-semibold fs-5'>Quick Turaround Time :</li>
                        <p className='fw-light' style={{color:"black",textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                            Our efficient processes ensure a swit approval and disbursement of your home loan marking your home-buying
                            journey smooth and hassle-free.
                        </p>
                    </ul>

                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row>
                    
                      <h2 className='mt-4 p-2'>Benefits and Features of Fincart Business Loans</h2>
                      <p style={{ color: "black", textAlign: "center", fontFamily: "sans-serif", fontSize: "18px" }}>Our mission is to offer accessible and flexible financing options to businesses of all sizes :</p>
                      <Col lg={3}>
                          <ul style={{ listStyleType: "none" }}>
                              <li className='fw-bold fs-6'>Coustmized Loan Solutions</li>
                          </ul>
                      </Col>
                      <Col lg={3}>
                          <ul style={{ listStyleType: "none" }}>
                              <li className='fw-bold fs-6'>Dedicated Support</li>
                          </ul>
                      </Col>
                      <Col lg={3}>
                          <ul style={{ listStyleType: "none" }}>
                              <li className='fw-bold fs-6'>Flexible Repayment Terms</li>
                          </ul>
                      </Col>
                      <Col lg={3}>
                          <ul style={{ listStyleType: "none" }}>
                              <li className='fw-bold fs-6'>Competitive Interest Rates</li>
                          </ul>
                      </Col>
                   
                </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row>
                    <h2 className='mt-5 p-4'>Better Than All: Fincart’s Personal Loans</h2>
                    <Col lg={12}>
                        <p  className='fw-light' style={{color:"black",textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                            At Fincart, we offer a range of home loan products designed to help you achieve your dream of homeownership. 
                            Whether you’re buying your first home, upgrading to a bigger space, or investing in property, our team of 
                            experts is here to guide you every step of the way. Trust Fincart to be your reliable partner in achieving your 
                            homeownership dreams.

                        </p>
                        <p className='fw-light ' style={{color:"black",textAlign:"left",fontFamily:"sans-serif",fontSize:"16px",marginBottom:"20px"}}>
                            With competitive interest rates, flexible repayment options, and personalized customer service, we cater 
                            to both first-time homebuyers and seasoned investors. Our streamlined application process ensures quick 
                            approvals, so you can focus on finding the perfect home.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}
