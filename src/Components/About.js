import React from 'react'
import './about.css';
import { Container,Row,Col } from 'react-bootstrap';
import cimage from './imgs/cimg.jpg';
import fimage from './imgs/fimg.jpg';

export default function About() {
  return (
    <div>
        <div className='backimg'>
            <div class='text'>
                <h1>Expert Investment Planning and <br />Advisory Services</h1>
                
                <p className='text-black p-4'>
                    Our advisors will craft personalized strategies and recommend the best investment options tailored <br/>to your financial goals.
                    Begin your journey with us & maximize your returns!
                </p>
            </div>
            
        </div>
        <div>
            <Container>
                <Row>
                    <h2 className='mt-5 p-3'>Investment Planning Services: Best Solutions for Your Financial Goals</h2>
                    <Col lg={6}>
                        <p className='fs-6 fw-light text-black' style={{fontFamily:"sans-serif",textAlign:"left",padding:"20px",margin:"20px"}}>
                            In the realm of investment planning, an advisor plays a crucial role in guiding individuals and firms toward their financial goals
                            In the realm of investment planning, an advisor plays a crucial role in guiding individuals and firms toward their financial goals
                            In the realm of investment planning, an advisor plays a crucial role in guiding individuals and firms toward their financial goals
                            In the realm of investment planning, an advisor plays a crucial role in guiding individuals and firms toward their financial goals.
                        </p>
                        <p className='fs-6 fw-light text-black' style={{fontFamily:"sans-serif",textAlign:"left",padding:"20px",margin:"20px"}}>
                            Investment advisors are instrumental in helping you identify suitable investment opportunities
                            Investment advisors are instrumental in helping you identify suitable investment opportunities
                            Investment advisors are instrumental in helping you identify suitable investment opportunities
                            Investment advisors are instrumental in helping you identify suitable investment opportunities.
                       </p>
                    </Col>
                    <Col lg={6}>
                        <img className='d-block w-100 mt-4'  src={cimage} alt=' ' />
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row style={{backgroundColor:"linen",marginTop:"10px"}}>
                    <h2 className='mt-4'>Choosing the Best Investment Planning Service Provider</h2>
                    <Col lg={12}>
                        <p className='fs-6 fw-light text-black ' style={{fontFamily:"sans-serif",textAlign:"left",padding:"20px",margin:"20px"}}>
                            Selecting the right investment planning service provider is crucial for your financial success. Look for a 
                            provider with a proven track record, extensive experience, and a solid reputation in the industry. Ensure they 
                            offer personalized strategies tailored to your unique financial goals and risk tolerance. Transparent fee structures,                        
                            professional credentials, and a commitment to client education are also essential factors. At Fincart, we pride ourselves on 
                            delivering expert guidance, customized solutions, and dedicated support to help you navigate the complexities of investment planning 
                            and achieve your financial aspirations.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <h2 className='mt-4 p-3'>What is SIP Investment? A Smart Way to Grow Your Wealth</h2>
                    <Col lg={6}>
                        <img className='d-block w-100 p-2' src={fimage} alt=' ' />
                    </Col>
                    <Col lg={6}>
                        <p className='fs-6 fw-light text-black' style={{fontFamily:"sans-serif",textAlign:"left",padding:"20px",margin:"20px"}}>
                            SIPs, or Systematic Investment Plans, are widely favored for investing in Mutual Funds. They promote financial 
                            discipline and help in growing wealth over time. Through SIPs, you can begin with modest amounts and steadily build 
                            up savings in an organized way. Its a methodical approach where you invest a fixed sum regularly, usually every month. 
                            Many prefer SIPs for investing in stocks and Mutual Funds as they enable market participation while reducing risk.
                        </p>
                        <p className='fs-6 fw-light text-black' style={{fontFamily:"sans-serif",textAlign:"left",padding:"20px",margin:"20px"}}>
                            SIPs are ideally suited for long-term wealth creation as they encourage regular and disciplined investing, allowing 
                            investors to benefit from the potential growth of the underlying investments in the mutual fund scheme over time. To maximize 
                            these benefits, working with the best SIP planner can provide valuable insights and strategies tailored to individual needs.

                        </p>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    </div>
  )
}
