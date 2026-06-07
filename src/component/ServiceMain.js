import React from 'react'
import './ServiceMain.css'
import {Row, Col} from 'react-bootstrap'


const ServiceMain = () => {
  return (
    <section>
        <h3>We provide a wide range of creative</h3>
      <h3> services</h3>
      <h6 className='service__convert'>-</h6>
    <Row>
        <Col lg='12' md='12'>
            <div className='counter'>
                <div className='d-flex gap-5 align-item-center'> 
                   <div className='section_s'>
                    <div className='s-single'>
                        <h2>Softwere Development</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>MediMusk for Wholesale Medical Billing</li>
                        <li>MediMusk for Retail Medical Billing</li>
                        <li>MediMusk for General Distributors</li>
                        <li>MediMusk for Hospital Management ERP</li>
                      
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Website & App Development</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>UI/UX Design for Web & Mobile Apps</li>
                        <li>Custom Website Development</li>
                        <li>Android & iOS App Development</li>
                        <li>E-commerce Solutions</li>
                     </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Smart Industry (IIoT)</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Sensor & Device Integration</li>
                        <li>Real-Time Monitoring Dashboard</li>
                        <li>Predictive Maintenance</li>
                        <li>Industrial Automation Systems</li>
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Cloud Automation Services</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Infrastructure as Code (IaC)</li>
                        <li>Automated Deployment & Scaling</li>
                        <li>Cloud Monitoring & Optimization</li>
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Database Supoort and Cunsultancy</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Mobile Based Applications (SM Sales Order)</li>
                        <li>Banking Applications</li>
                        <li>Wholesale & Retail Medical Billing</li>
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Content Creation</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Digital Marketing</li>
                        <li>Social Media Networks</li>
                        <li>Search Engine Optimization(SEO)</li>
                      </ul>
                        </p>
                    </div>
                   </div>
                </div>
            </div>
        </Col>
    </Row>
  </section>
  )
}
export default ServiceMain
