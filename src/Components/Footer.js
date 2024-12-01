import React from 'react';
import { Container,Row ,Col } from 'react-bootstrap';
import './footer.css';

export default function Footer() {
  return (
      <div>
          <footer >
              <Container>
                  <Row>
                      <Col lg={3}>
                          <h5 className="fs-4" style={{ marginTop: "50px", color: "white", fontFamily: "sans-serif" }}>FINANCIAL PLANS</h5>
                          <ul className="fs-6 p-2" style={{ listStyleType: "none", color: "white" }}>

                              <li>Financial Planning</li>
                              <li>Investment Planning</li>
                              <li>Goal Planning</li>
                              <li>Risk Management</li>
                              <li>Tax Saving And Planning</li>

                          </ul>
                      </Col>
                      <Col lg={3}>
                          <h5 className="fs-4" style={{ marginTop: "50px", color: "white", fontFamily: "sans-serif" }}>INVESTMENT PLANS</h5>
                          <ul className="fs-6 p-2" style={{ listStyleType: "none", color: "white" }}>
                              <li>Mutual Funds</li>
                              <li>SIP</li>
                              <li>Income Returns</li>
                              <li>Protfolio Management Services</li>
                              <li>Gold</li>

                          </ul>

                      </Col>
                      <Col lg={3}>
                          <h5 className="fs-4" style={{ marginTop: "50px", color: "white", fontFamily: "sans-serif" }}>LOAN HUB</h5>
                          <ul className="fs- p-2" style={{ listStyleType: "none", color: "white" }}>
                              <li>Home Loan</li>
                              <li>Business Loan</li>
                              <li>Personal Loan</li>

                          </ul>
                      </Col>
                      <Col lg={3}>
                          <h5 className="fs-4" style={{ marginTop: "50px", color: "white", fontFamily: "sans-serif" }}>CONTACT INFO</h5>
                          <ul className="fs-6 p-2" style={{ listStyleType: "none", color: "white" }}>
                              <li>
                                  <i class="fa-solid fa-location-dot"></i> NCPL Tower Ground & 2nd Floor, A-4,A Block, Sector 9
                              </li>
                              <li><i class="fas fa-phone"></i> +91 1234567890</li>
                              <li><i class="fas fa-envelope"></i> finance@gmail.com</li>

                          </ul>
                      </Col>
                      <Row>
                          <Col lg={3}>
                              <h5 className="fs-4" style={{ marginTop: "50px", color: "white", fontFamily: "sans-serif" }}>PLAN FOR TOMORROW</h5>
                              <ul className="fs-6 p-2" style={{ listStyleType: "none", color: "white" }}>
                                  <li>Workshop</li>
                                  <li>Corporate NPS</li>
                                  <li>Group Health Insurance</li>
                              </ul>

                          </Col>
                          <Col lg={3}>
                              <h5 className="fs-4" style={{ marginTop: "50px", color: "white", fontFamily: "sans-serif" }}>INSURANCE</h5>
                              <ul className="fs-6 p-2" style={{ listStyleType: "none", color: "white" }}>
                                  <li>Health Insurance</li>
                                  <li>Term Insurance</li>
                                  <li>Critical Insurance</li>
                                  <li>Asset Insurance</li>
                              </ul>

                          </Col>
                          <Col lg={3}>
                          </Col>
                          <Col lg={3}>
                              <ul className="fs-6 p-2" style={{ listStyleType: "none", color: "white" }}>

                                  <li>Terms and Conditions</li>
                                  <li>Privacy Policy</li>
                                  <li>Disclosuers</li>
                                  <li>Career</li>

                                  <i class="fa-brands fa-square-facebook fs-3"></i>
                                  <i class="fa-brands fa-square-instagram fs-3"></i>
                                  <i class="fa-brands fa-square-youtube fs-3"></i>
                                  <i class="fa-brands fa-linkedin fs-3"></i>
                                  <i class="fa-brands fa-square-twitter fs-3"></i>
                              </ul>

                          </Col>
                      </Row>
                  </Row>
              </Container>
          </footer>
          <div className='footsec'>
              <Container>
                  <Row>
                      <Col lg={12}>
                          <h6 className='lead fs-6 text-white mt-5'>Copyright © 2024 Fincart | Powered By Fincart |</h6>
                          <p className="fs-6" style={{ color: "gold", fontFamily: "sans-serif", textAlign: "left" }}>Virtual Financial Advisory Across India: Serving Major clientele in these cities</p>
                          <p className="fs-6" style={{ color: "white", fontFamily: "sans-serif", textAlign: "left" }}>
                              financial planning services offer the advantages of professional expertise,objective guidance, and personalized strategies to help individuals<br />
                              and businesses achieve financial success.
                          </p>
                      </Col>
                  </Row>
              </Container>
          </div>
    </div>
  )
}
