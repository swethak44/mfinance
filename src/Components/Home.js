import React from 'react';
import './home.css';

import { Row , Col} from 'react-bootstrap';



export default function Home() {
  return (
    <div>
        <div className='background'>
            <div class='text'>
                <h1>Expert Financial Planning Services</h1>
                <p className='text-black p-4'>
                    Get expert financial advice in Bangalore with personalized planning for investments, wealth investments<br/>
                    management, and securing your financial futureGet expert financial advice in Bangalore with personalized<br />
                    planning for investments.
                </p>
            </div>
            
        </div>
        <div class="container">
            <h2>Best Financial Advisor in Bangalore</h2>
            <p className='mt-4 text-black'>
                To achieve your financial goals in life, having a financial planner by your side is the best decision you can make. Financial planners assist
                you in overcoming financial obstacles for you to reach your financial goals. By people’s choice, we are the best financial advisor in
                Bangalore. Its no secret that financial planners are on the rise, but what makes us the best financial services company in Bangalore? 
            </p>
            <br />
            <p className='text-black'>
               Here what you need to know! 
            </p>
            
        </div>
        <div className="container">
            <Row>
                <Col lg={12}>
                    <div className='box'>
                    <h2 >Financial Planning Services Offered by Fincart in Bangalore</h2>
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
                            <li className='fw-medium fs-5'>Tax Optimization Services</li>
                            <p className='text-black'>
                                Effective tax planning can significantly enhance your wealth accumulation. Our Tax Optimization Services are designed to help
                                you minimize your tax liabilities while staying compliant with the law. We analyze your financial situation and advise you on 
                                tax-saving investments, deductions, and exemptions that can reduce your overall tax burden.
                            </p>
                            <li className='fw-medium fs-5'>Insurance Analysis Services</li>
                            <p className='text-black'>
                                Having the right insurance coverage is essential for protecting your financial well-being. Our Insurance Analysis Services 
                                involve a thorough review of your current insurance policies and identifying any gaps in coverage. We provide recommendations on the 
                                types and amounts of insurance you need to safeguard your assets and provide financial security for your loved ones.
                            </p>
                        </ul> 
                    </div>
                </Col>
                
            </Row>
        </div>
        <div class='section'>
            {/* <img  className='d-block w-100'style={{height:"550px", width:"100vh", opacity:"0.35",marginTop:"50px" }} src={bimage} alt=''/> */}
           
            <div className='container '>
                <h2 className='fw-semibold text-white p-4 fs-1'>Benefits of financial planning services in bangalore</h2>
                <ol className=' fs-5 text-white' style={{textAlign:"left"}} >
                    <li className='p-2' > Financial planning services help individuals and businesses define their short-term and long-term financial goals. They provide a structured approach to goal setting and help clients gain clarity on their financial aspirations.</li>
                    <li className='p-2 '>Income, expenses, assets, and liabilities are examined by financial planners to determine a clients current financial situation. They consider various factors such as risk tolerance, time horizon, and financial commitments to provide a holistic view of the clients financial health.</li>
                    <li className='p-2 '>Based on the analysis of the clients financial situation and goals, financial planners develop personalized strategies to help achieve those goals. They consider investment options, tax implications, retirement planning, estate planning, and risk management to create a tailored financial roadmap.  </li>
                    <li className='p-2 '> They help clients identify and mitigate financial risks. They evaluate insurance needs, assess risk tolerance, and recommend appropriate insurance coverage to protect against unforeseen events such as accidents, disability, illness, or loss of income. </li>
                    <li className='p-2 '>Financial planners assist clients in making informed investment decisions. They consider factors such as risk appetite, investment horizon, and financial goals to create an investment portfolio aligned with the clients objectives. They also monitor and review investments regularly, making adjustments as needed. </li>
                </ol>

            </div>
        </div>
        
    </div>
    
  )
}
