import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <>
            <Container fluid className='p-0'>
                <div className='bg-style'>
                    <h1 className='ieee'>IEEE</h1>
                    <h3 className='text-white'>COMPUTER SOCIETY</h3>
                    <h1 className='text-white fw-bold'>LEADING UNIVERSITY</h1>
                    <h4 className='fw-bold'>STUDENT BRANCH CHAPTER</h4>
                </div>
            </Container>
            <Container className='about-section'>
                <Row>
                    <Col md={6} lg={6} xs={12}>
                        <h3 className='fw-bold ms-3 heading'>About Us</h3>
                        <p className='mt-5'>Institute of Electrical and Electronics Engineers, a nonprofit organization being just the ticket to each and every necessity for individuals with the precept of advancing technology for the benefit of humanity. IEEE is the complete package to technology devotees trying their heart out to bring their dream technologies to come to life. With the corporate office in New York City and its operations center in Piscataway, New Jersey, IEEE has created a platform uniting the engineering and technology professionals to collaborate with each other and bring innovative ideas into existence.</p>
                    </Col>
                    <Col md={6} lg={6} xs={12}>
                        <img className='img-fluid' src="https://brand-experience.ieee.org/wp-content/uploads/2021/10/ieee-corp-ppt-main-version-new-image-spot.png" alt="" />
                    </Col>
                </Row>
                <Row className='gap-between-rows mb-5'>
                    <Col md={6} lg={6} xs={12}>
                        <img className='img-fluid' src="https://ea.ieeer10.org/wp-content/uploads/2021/03/Screen-Shot-2021-03-10-at-8.21.59-AM-7.png" alt="" />
                    </Col>
                    <Col md={6} lg={6} xs={12}>
                        <h3 className='fw-bold ms-3 heading'>IEEE R10</h3>
                        <p className='mt-5'>
                            Institute of Electrical and Electronics Engineers, a nonprofit organization being just the ticket to each and every necessity for individuals with the precept of advancing technology for the benefit of humanity. IEEE is the complete package to technology devotees trying their heart out to bring their dream technologies to come to life. With the corporate office in New York City and its operations center in Piscataway, New Jersey, IEEE has created a platform uniting the engineering and technology professionals to collaborate with each other and bring innovative ideas into existence.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AboutUs;