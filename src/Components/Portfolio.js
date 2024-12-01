import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div>
        <div className='image'>
            <div class='text'>
                <h1>Portfolio Management Services</h1>
                <p class="text-black fs-6 p-4" >
                    Take the guesswork out of investing with Fincarts portfolio management services.<br/>
                    Our experts customize portfolios to suit your risk tolerance and financial goals,<br/> ensuring optimal returns. 
                    Connect now!
                </p>
            </div>
            
        </div>
        <div>
          <Container>
            <Row>
              <h2 className='mt-5 p-3'>Portfolio Management Advisory Service</h2>
              <Col lg={12}>
                  <p className=' fw-light text-black' style={{ fontFamily: "sans-serif", textAlign: "left", padding: "20px" ,fontSize:"16px"}}>
                    Portfolio Management Service is a professional as well as licensed service provided by portfolio managers 
                    or investment advisory firms. It is regulated by SEBI (Securities and Exchange Board of India). 
                    Under portfolio management, tailor-made investment solutions are provided based on the clients objectives, 
                    risk tolerance, and investment preferences. The portfolio management services are favored by many high-net-worth individuals (HNIs). 
                    The ticket size for availing portfolio management services is Rs. 50 lakh. Unlike mutual funds, there is no pooling of assets, here, 
                    every investor has a unique portfolio based on their risk tolerance & needs!
                  </p>
                  <p className=' fw-light text-black' style={{ fontFamily: "sans-serif", textAlign: "left", padding: "20px" ,fontSize:"16px"}}>
                    Portfolio management is backed by highly experienced and qualified portfolio managers who conduct research, analyze 
                    markets and trends, and accordingly make informed decisions. They monitor your portfolios, rebalance them, and make the 
                    necessary investment adjustments as per your needs!
                  </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='container'>
          <Row>
            <Col lg={12}>
              <div class="box-row">
                <h2>Why Choose Portfolio Management Advisory Services?</h2>                  
                <p>
                  Understanding why investment is important to you is vital before seeking any kind of investment advice. 
                  Here are some reasons why one should consider portfolio advisory services:
                </p>
                <ul>
                  <li className='fw-semibold fs-5'>Diversification :</li>
                  <p>
                    By investing in a variety of assets across different industries, sectors, and regions, portfolio management allows 
                    for diversification. Diversification helps to reduce the impact of any single investment on the overall portfolio, 
                    thereby reducing risk.
                  </p>
                  <li className='fw-semibold fs-5'>Risk management :</li>
                  <p>
                    Through diversification, risk can be spread across different assets, which can help protect against unexpected 
                    events and market volatility. This approach aligns with the principles of risk management, as it aims to mitigate 
                    potential losses and promote overall financial stability.
                  </p>
                  <li className='fw-semibold fs-5'>Monitoring and rebalancing :</li>
                  <p>
                    In portfolio management, investments are actively monitored and periodically rebalanced. As a result, 
                    the portfolio remains aligned with the investor's goals and risk tolerance over time.
                  </p>
                  <li className='fw-semibold fs-5'>Long-term focus :</li>
                  <p>
                    Typically, portfolio management has a long-term focus, aiming to achieve sustainable growth. 
                    An investor's time frame and investment horizon are taken into account when creating a strategy.
                  </p>
                  <li className='fw-semibold fs-5'>Maximizing returns  :</li>
                  <p>
                    A portfolio manager seeks to maximize returns within a given risk tolerance by carefully selecting investments and 
                    adjusting portfolio allocation accordingly.
                  </p>

                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Container>
            <Row>
              <Col lg={12}>
                <h2>Benefits of Portfolio Management Services</h2>
                <ul style={{listStyleType:"none"}}>
                  <li className='fw-semibold fs-5'><u>Diversification of Risks</u></li>
                  <p style={{color:"black",textAlign:"left",fontFamily:"sans-serif",fontSize:"16px"}}>
                    Portfolio management services spread your investments across various assets, reducing the impact of poor 
                    performance of any single investment on the overall portfolio, thereby minimizing risks.
                  </p>
                  <li className='fw-semibold fs-5'><u>Ensures Maximum Returns</u></li>
                  <p style={{color:"black",textAlign:"left",fontFamily:"sans-serif",padding:"15px",fontSize:"16px"}}>
                    PMS services aim to maximize returns by actively managing the portfolio. Professional portfolio managers 
                    analyze market trends, economic conditions, and individual securities to make informed investment decisions 
                    that seek to optimize your returns.
                  </p>
                  <li className='fw-semibold fs-5'><u>Active Monitoring & Customization</u></li>
                  <p style={{color:"black",textAlign:"left",fontFamily:"sans-serif",padding:"15px",fontSize:"16px"}}>
                    Portfolio managers continuously monitor the market and individual investments. They adjust the portfolio in 
                    real-time to capitalize on emerging opportunities or mitigate risks. Customization ensures that the portfolio 
                    aligns with the investors financial goals and risk tolerance.
                  </p>
                  <li className='fw-semibold fs-5'><u>Extensive Professional Experience</u></li>
                  <p style={{color:"black",textAlign:"left",fontFamily:"sans-serif",padding:"15px",fontSize:"16px"}}>
                    Portfolio advisory services are managed by experienced and qualified professionals who understand the complexities 
                    of the financial world. They use their knowledge about where to invest your money, increasing the likelihood of 
                    positive returns.  
                  </p>
                  <li className='fw-semibold fs-5'><u>Diverse Investment Options</u></li>
                  <p style={{color:"black",textAlign:"left",fontFamily:"sans-serif",padding:"15px",fontSize:"16px"}}>
                    Instead of being limited to one or two types of investments, portfolio management services offer a wide range of 
                    options. This diversity allows you to invest in different areas, industries, or regions.
                  </p>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
          <Row>
            <h2>Different Types of Portfolio Management Services</h2>
            <p style={{color:"black",textAlign:"center",fontFamily:"sans-serif",fontSize:"18px"}}>There are four different types of portfolio management services:</p>
            <Col lg={3}>
              <ul style={{ listStyleType: "none" }}>
                <li className='fw-bold fs-6'>Active Portfolio Management</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul style={{ listStyleType: "none" }}>
                <li className='fw-bold fs-6'>Passive Portfolio Management</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul style={{ listStyleType: "none" }}>
                <li className='fw-bold fs-6'>Discretionary Portfolio Management</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul style={{ listStyleType: "none" }}>
                <li className='fw-bold fs-6'>Non-Discretionary Portfolio Management</li>
              </ul>
            </Col>
          
          </Row>
          </Container>
        </div>
    </div>
  )
}
