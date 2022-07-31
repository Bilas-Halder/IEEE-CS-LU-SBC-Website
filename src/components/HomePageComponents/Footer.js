import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import styles from "../../styles/components/HomePageStyles/Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`container-fluid ${styles.footer_container}`}>
                <h1>HELLO</h1>
            </div>

            <div className={`container-fluid ${styles.socials_container}`}>
                <Row>
                    <Col lg={8} md={8} xs={12}>
                        <p className="text-white my-4 mx-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sapiente ipsam ut animi facere minima,
                            repellat!
                        </p>
                    </Col>
                    <Col lg={4} md={4} xs={12}>
                        <div className={styles.social_links}>
                            <a href="http://www.facebook.com">
                                <p className="text-white fs-3 p-2">
                                    <FaFacebook />
                                </p>
                            </a>
                            <a href="http://www.facebook.com">
                                <p className="text-white fs-3 p-2">
                                    <FaEnvelope />
                                </p>
                            </a>
                            <a href="http://www.facebook.com">
                                <p className="text-white fs-3 p-2">
                                    <FaWhatsapp />
                                </p>
                            </a>
                            <a href="http://www.facebook.com">
                                <p className="text-white fs-3 p-2">
                                    <FaTwitter />
                                </p>
                            </a>
                            <a href="http://www.facebook.com">
                                <p className="text-white fs-3 p-2">
                                    <FaLinkedinIn />
                                </p>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
