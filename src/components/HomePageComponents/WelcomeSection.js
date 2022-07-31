import React from "react";
import styles from "../../styles/components/HomePageStyles/WelcomeSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

const WelcomeSection = () => {
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
                                    className={`fw-bold display-5 ${styles.achievement}`}
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
                            <div className={styles.welcome_message}>
                                <p className="p-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nulla montes, dignissim
                                    duis ac id mattis arcu. Scelerisque arcu
                                    diam. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nulla montes,
                                    dignissim duis ac id mattis arcu.
                                    Scelerisque arcu diam. Lorem ipsum dolor sit
                                    amet, consectetur adipiscing elit. Nulla
                                    montes, dignissim duis ac id mattis arcu.
                                    Scelerisque arcu diam.{" "}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default WelcomeSection;
