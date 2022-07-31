import React from "react";
import styles from "../../styles/components/HomePageStyles/UpcomingEvents.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const UpcomingEvents = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.events_wrapper}>
                {/* <h1>Upcoming Events</h1> */}
                <h1 className={styles.border_bottom}><span className={`fw-bold fs-2 ${styles.our}`}>UPCOMING</span> <span className={`fw-bold fs-2 ${styles.achievement}`}>EVENTS</span></h1>
                <div className={styles.event_card}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className={`d-block w-100 ${styles.images}`}
                                src="/images/background.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={`d-block w-100 ${styles.images}`}
                                src="/images/background.png"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={`d-block w-100 ${styles.images}`}
                                src="/images/background.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className={styles.news_wrapper}>
                <h1 className={styles.border_bottom}><span className={`fw-bold fs-2 ${styles.our}`}>RECENT</span> <span className={`fw-bold fs-2 ${styles.achievement}`}>NEWS</span></h1>
                <div className={styles.news_card}>
                    <div className={styles.upper_carousel}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.images}`}
                                    src="/images/background.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.images}`}
                                    src="/images/background.png"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.images}`}
                                    src="/images/background.png"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='my-3'>
                        <div className="pt-2">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <div className={`d-flex justify-content-between align-items-center ${styles.listed_news}`}>
                                    <div className={styles.news_thumbnail}>
                                        <img className="img-fluid p-2 w-100" src="/images/background.png" alt="" />
                                    </div>
                                    <div className="p-2">
                                        <p className={styles.news_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
