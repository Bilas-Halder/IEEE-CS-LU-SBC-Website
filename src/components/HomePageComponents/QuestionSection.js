import React from "react";
import styles from "../../styles/components/HomePageStyles/QuestionSection.module.css";
import { Col, Container, Row, Accordion } from "react-bootstrap";

const QuestionSection = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className="my-5">
                    <Row>
                        <Col lg={7} md={6} xs={12}>
                            <div className="text-center">
                                <h1
                                    className={`fw-bold display-1 ${styles.our}`}
                                >
                                    WELCOME
                                </h1>
                                <h5 className={`fw-bold fs-1 ${styles.our}`}>
                                    TO
                                </h5>
                                <h3
                                    className={`fw-bold display-5 ${styles.faqs_blue_color}`}
                                >
                                    IEEE COMPUTER SOCIETY
                                </h3>
                                <h5 className="fw-bold">
                                    LEADING UNIVERSITY, SB CHAPTER
                                </h5>
                            </div>
                        </Col>
                        <Col
                            lg={5}
                            md={6}
                            xs={12}
                            className={styles.welcome_card}
                        >
                            <div className={`my-2 ${styles.faqs}`}>
                                <h1 className={styles.border_bottom}>
                                    <span
                                        className={`fw-bold fs-1` + ` ${styles.faqs_blue_color}`}
                                    >
                                        FAQs
                                    </span>
                                </h1>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            IEEE CS LU SB
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            IEEE CS LU SB
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            IEEE CS LU SB
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            IEEE CS LU SB
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            IEEE CS LU SB
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default QuestionSection;
