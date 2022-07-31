import React from "react";
import styles from "../../styles/components/HomePageStyles/AchievementSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

const AchievementSection = () => {
    return (
        <Container>
            <div className='text-center my-5'>
                <h1 className={`fw-bold ${styles.achievement_border}`}> <span className={`${styles.our}`}>OUR </span> <span className={`${styles.achievement}`}> ACHIEVEMENTS </span> </h1>
                <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo architecto</p>
            </div>


            <div className='my-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <Card className={styles.achievement_card}>
                                <Card.Img variant="top" src="https://i.ytimg.com/vi/dYtoBTvtUJg/maxresdefault.jpg" />
                                <Card.Body>
                                    <Card.Title>IEEE CS</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </Container>
    );
};

export default AchievementSection;
