import React from 'react';
import './mutualfunds.css';
import { Container,Row,Col } from 'react-bootstrap';
import eimage from './imgs/eimg.jpg';

export default function MutualFunds() {
  return (
    <div>
        <div className='backimage'>
            <div class='text'>
                <h1>Fincart Mutual Fund Investment <br/>Planning Process</h1>
               
                <p className='text-black p-4'>
                    Discover the potential of mutual funds with Fincarts expert guidance. Our advisors will design a strategy<br/>
                    to maximize your wealth through carefully selected mutual fund investments. 
                </p>
            </div>  
        </div>
        <div>
            <Container>
                <Row>
                    <h2 className='mt-5 p-3'>Understanding Mutual Fund with Fincart Mutual Fund Advisor</h2>
                    <Col lg={6}>
                        <p className='fs-6 fw-light text-black' style={{fontFamily:"sans-serif",textAlign:"left",padding:"20px",margin:"20px"}}>
                            A mutual fund is a financial vehicle in which the investors pool money to invest in different markets and securities. 
                            Such funds are invested based on a particular fund scheme objective. Mutual fund investments are a great source to help 
                            you achieve your financial goals. Mutual funds aim to generate returns by investing in a diversified mix of assets, reducing 
                            the risk associated with single-stock investments.They cater to various risk profiles, from conservative to aggressive, offering 
                            options suitable for different investment objectives and time horizons.
                        </p>
                        <p className='fs-6 fw-light text-black' style={{fontFamily:"sans-serif",textAlign:"left",padding:"20px",margin:"20px"}}>
                            Investing in mutual funds involves purchasing units of the fund, with each unit representing a portion of the total assets. 
                            As the funds holdings appreciate or generate income, investors benefit proportionally. The inherent diversification helps spread 
                            risk, and investors can choose funds aligned with their financial goals, risk tolerance, and preferences. In essence, mutual funds 
                            provide a convenient and accessible way for individuals to participate in investment planning, offering the potential for growth while 
                            minimizing the complexities associated with direct investment in individual securities.
                       </p>
                    </Col>
                    <Col lg={6}>
                        <img className='d-block w-100' src={eimage} alt=' ' />
                    </Col>
                </Row>
                <Row>
                    <h2 className='mt-5 p-3'>How Do Mutual Funds Work?</h2>
                    <Col lg={12}>
                        <p classNmae="p-3 mt-3 " style={{textAlign:"left",color:"black"}}>
                            Under mutual fund investment, funds are pooled from multiple investors to invest in a diversified portfolio of stocks, bonds, or other 
                            assets. Professional fund managers make investment decisions on behalf of investors. Each investor owns shares proportional to their investment, 
                            and gains or losses are distributed among shareholders. This structure allows individual investors to access a diversified portfolio without directly 
                            managing investments, making mutual funds a popular choice for those seeking convenience and diversification in their investments.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <h3 className='mt-5 p-3 text-center'>Types of Mutual Fund Investment</h3>
                    <Col lg={12}>
                        <p style={{textAlign:"left",color:"black"}}>Explore various types of mutual fund investment plans tailored to your financial goals. Trust our expert mutual fund advisors and consultants to guide you toward
                         optimal investment strategies for long-term financial success.</p>
                       <ol >
                            <li className='fw-bold'>Equity Mutual Funds:</li>
                            <p className='fw-light text-black' style={{textAlign:"left"}}>
                                Equity mutual funds primarily invest in stocks and equities of various companies. They aim to generate long-term capital appreciation by capitalizing on the growth potential of the stock market.
                            </p>
                            <li className='fw-bold'>Debt Mutual Funds:</li>
                            <p className='fw-light text-black' style={{textAlign:"left"}}>
                                Debt funds invest in fixed-income securities like government bonds, corporate bonds, and other debt instruments. They aim to provide stable returns and are suitable for investors seeking regular income.
                            </p>
                            <li className='fw-bold'>Gilt Funds:</li>
                            <p className='fw-light text-black' style={{textAlign:"left"}}>
                                Invest in government securities, considered low-risk due to the sovereign backing.
                            </p>
                            <li className='fw-bold'>Corporate Bond Funds:</li>
                            <p className='fw-light text-black' style={{textAlign:"left"}}>
                                Invest in bonds issued by corporations, varying in risk based on the issuers creditworthiness.
                            </p>
                            <li className='fw-bold'>Liquid Funds:</li>
                            <p className='fw-light text-black' style={{textAlign:"left"}}>
                                Invest in short-term money market instruments, providing high liquidity and safety.
                            </p>
                        </ol>
                        {/* <button className=' fs-5'>
                            Get Expert Advice Now
                        </button>  */}
                    </Col>
                </Row>
                <Row >
                    <h2 className='mt-5 p-3'>Why Mutual Funds Investment?</h2>
                    <p className='text-black'>We will delve into the advantages of mutual funds investment and why they are an excellent option for both novice and experienced investors.</p>
                    <Col lg={3}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold'>Diversification of assets</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold'>Offer high liquidity</li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold'>Safety and transparency</li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold'>Lower cost</li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold text-black'>Tax Benfits</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}
