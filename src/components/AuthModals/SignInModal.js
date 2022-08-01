import { Modal, Container, Form } from "react-bootstrap";
import styles from "../../styles/components/AuthStyles/SignInModal.module.css";
import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import useAuth from "../../StateManager/useAuth";

const SignInModal = (props) => {
    const [error, setError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { signInModalToggle, setSignInModalToggle, joinUsModalToggle, setJoinUsInModalToggle } = useAuth();

    const setField = (field, value) => {
        console.log(field, value);
        setFormData({ ...formData, [field]: value });
        if (error[field]) {
            setError({ ...error, [field]: false });
        }
    }

    const handleJoinUs = (e) => {
        e.preventDefault();
        console.log('clicking join us');
        setSignInModalToggle(!signInModalToggle);
        setJoinUsInModalToggle(!joinUsModalToggle);
    }

    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        validate();
        console.log(formData);
        console.log(error);
    }


    const validate = () => {
        const { email, password } = formData;

        // email
        if (/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
            error.email = false;
        }
        else {
            error.email = 'Email is not valid';
        }

        // password
        if (/^[A-Za-z @$!%*#;?&\d]{6,10}$/.test(password)) {
            error.password = false;
        }
        else {
            error.password = 'Wrong Password';
        }

        setError({ ...error });
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName={styles.modal_radius}
        >
            <h1 className="fs-1 fw-bold text-center mt-4 mb-3">
                {" "}
                <span className={styles.sign_title}>Sign</span>{" "}
                <span className={styles.in_title}>In</span>{" "}
            </h1>

            {/* horizontal line er code  */}

            <div className={styles.hr_line_container}>

                <div className={styles.hr_line_box}>
                    <div className={styles.hr_line_yel}> </div>
                    <div className={styles.hr_line_blu}> </div>
                </div>
            </div>
            {/*  */}

            <Modal.Body className={styles.signIn_modal}>
                <Container>
                    <Form className="mx-auto" style={{ width: "80%" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-muted">
                                Enter Your Email
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="email"
                                type="email"
                                placeholder=""
                                onChange={(e) => setField("email", e.target.value)}
                                isInvalid={error.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            className="mb-3 position-relative"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="text-muted">
                                Password
                            </Form.Label>
                            <Form.Control
                                className={styles.pass_input_box}
                                name="password"
                                type={showPass ? "text" : "password"}
                                placeholder=""
                                onChange={(e) => setField("password", e.target.value)}
                                isInvalid={error.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.password}
                            </Form.Control.Feedback>
                            {
                                error.password ? null : <span
                                    className={styles.pass_eye}
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {showPass ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                </span>
                            }
                        </Form.Group>
                        <br />
                        <div className={styles.forget_pass}>
                            <a
                                style={{ textDecoration: "none" }}
                                href="htt"
                            >
                                Forget password?
                            </a>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="keep_logged_in"
                                name="logged_in_check"
                                value="Bike"
                            />
                            <label className="px-1 mt-3" for="keep_logged_in">
                                Keep me signed in
                            </label>
                            <br></br>
                        </div>
                        <div className="mt-5 mb-4 d-flex justify-content-around">
                            <div>
                                <button
                                    className={styles.signIn_btn}
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div>
                                <button
                                    className={styles.joinUs_btn}
                                    onClick={handleJoinUs}
                                >
                                    Join Us
                                </button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default SignInModal;
