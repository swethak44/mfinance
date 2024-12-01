import React from 'react';
import './insurance.css';
import { Container,Row,Col } from 'react-bootstrap';
import himage from './imgs/himg.jpg';

export default function Insurance() {
  return (
    <div>
        <div className='backgroundimg'>
            <div class='text'>
                <h1>What medical expenditure does a <br/>Health Insurance Policy Cover?</h1>
                <p  className='text-black p-4' style={{textAlign:"left"}}>
                    Dont wait until its too late Protect yourself and your loved ones today with Fincarts best<br/>
                    health insurance solutions.Our health insurance planner and advisor help you find the right plan. 
                    
                </p>
            </div> 
        </div>
        <div>
            <Container>
                <Row>
                    <h2 className='mt-5 p-3'>What is Health Insurance?</h2>
                    <Col lg={12}>
                        <p className='text-black'> 
                            Health insurance is a financial safety net that covers medical expenses arising from illnesses, injuries, or hospitalizations. It helps individuals and families manage healthcare costs by providing coverage for treatments, surgeries, and other medical services.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <h2 className='mt-5 p-3'>Why Is Health Insurance Important for Your Familys Well-being?</h2>
                    
                    <p className='text-black'>
                        Loved ones falling sick with any critical disease is emotionally draining. It disturbs the entire family and it certainly is a big financial burden. Further, medical inflation has remained high year on year. Health Insurance cant reduce the emotional upheaval but can take off the financial concerns.
                    </p> 
                    <Col lg={4}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold fs-5'>Tax Benefits Under Section 80D</li>
                        </ul>
                    </Col> 
                    <Col lg={4}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold fs-5'>Coverage of medical expenses</li>
                        </ul>
                    </Col> 
                    <Col lg={4}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold fs-5'>Lifetime Renewability Benefit</li>
                        </ul>
                    </Col> 
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12}>
                    <div className='boxsec'>
                        <h2 className='p-3 mt-5'>What Medical Expenditures Are Covered Under Health Insurance?</h2>
                        <p className='text-black'>
                            A health insurance policy covers all medical expenses as per the terms and conditions mentioned in the policy documents. 
                            But today, most health insurance plans cover hospitalization expenses including hospitalization, daycare treatments, medical tests, 
                            ambulance services, specialist consultation charges, etc.
                        </p>
                        <ul>
                            <li className='fw-medium fs-5'>Investment Planning Services</li>
                            <p className='text-black' >
                                Investment Planning Services are aimed at helping you create a robust investment portfolio that aligns with your risk tolerance, 
                                time horizon, and financial objectives. Whether you're looking to invest in mutual funds, stocks, bonds, or other financial instruments,
                                our expert advisors will guide you in making informed decisions to maximize your returns.
                            </p>
                            <li className='fw-medium fs-5'>Retirement Planning Services</li>
                            <p className='text-black'>
                                Planning for retirement is crucial to ensuring a comfortable and secure future. At Fincart, our Retirement Planning Services
                                focus on creating a detailed plan that helps you accumulate the necessary funds for your post-retirement life. We consider factors such as 
                                inflation, life expectancy, and your desired lifestyle to develop a strategy that ensures you won't outlive your savings.
                            </p>
                        </ul>

                    </div>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h2 className='p-3 mt-5'>How to Determine the Right Health Insurance Coverage for You?</h2>
                    <Col lg={6}>
                        <p className='fs-6 fw-light text-black' style={{ fontFamily: "sans-serif", textAlign: "left", padding: "20px", margin: "20px" }}>
                            To understand the required amount, there are a few things to consider: your current age, your hospital preference,
                            your & familys health condition, affordability, etc. Healthcare costs vary from one hospital to another due to status & facilities.
                            However, our relationship managers structure the health insurance coverage with a very high hospitalization coverage with the least possible premium.
                            Further, these help you save tax optimally under section 80D of the Income Tax Act.
                        </p>
                        <p className='fs-6 fw-light text-black' style={{ fontFamily: "sans-serif", textAlign: "left", padding: "20px", margin: "20px" }}>
                            To understand the required amount, there are a few things to consider: your current age, your hospital preference,
                            your & familys health condition, affordability, etc. Healthcare costs vary from one hospital to another due to status & facilities.
                            However, our relationship managers structure the health insurance coverage with a very high hospitalization coverage with the least possible premium.

                        </p>

                    </Col>
                    <Col lg={6}>
                        <img className='d-block w-100' src={himage} alt=' ' />
                    </Col>
                </Row>
            </Container>
            
        </div>
    </div>
  )
}
