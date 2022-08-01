import { Modal, Container, Form } from "react-bootstrap";
import styles from "../../styles/components/AuthStyles/SignInModal.module.css";
import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const JoinUsModal = (props) => {

    const [error, setError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const setField = (field, value) => {
        console.log(field, value);
        setFormData({ ...formData, [field]: value });
        if (error[field]) {
            setError({ ...error, [field]: false });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        console.log(formData);
        console.log(error);
    }

    const validate = () => {
        const { first_name, last_name, email, password, confirm_password } = formData;

        const keys = Object.keys(formData);
        console.log(keys);

        // first name
        if (/^[A-Za-z ]+$/.test(first_name)) {
            error.first_name = false;
        }
        else if (first_name.length < 3) {
            error.first_name = 'First Name must be at least 3 characters long';
        }
        else {
            error.first_name = 'First Name must be alphabets and only';
        }

        // last name
        if (/^[A-Za-z ]+$/.test(last_name)) {
            error.last_name = false;
        }
        else if (last_name.length < 3) {
            error.last_name = 'Last Name must be at least 3 characters long';
        }
        else {
            error.last_name = 'Last Name must be alphabets and only';
        }

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

            if (password !== confirm_password) {
                error.confirm_password = 'Passwords do not match';
            }
        }
        else if (password.length < 6) {
            error.password = 'Password must be at least 6 characters long';
        }
        else {
            error.password = 'Password can contain only alphabets, numbers and @$!%*#?& characters';
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
                <span className={styles.sign_title}>Join</span>{" "}
                <span className={styles.in_title}>Us</span>{" "}
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
                    <Form noValidate className="mx-auto" style={{ width: "80%" }}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicFirstName"
                        >
                            <Form.Label className="text-muted">
                                First Name
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="first_name"
                                type="name"
                                placeholder=""
                                onChange={(e) => setField("first_name", e.target.value)}
                                isInvalid={error.first_name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.first_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicLastName"
                        >
                            <Form.Label className="text-muted">
                                Last Name
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="last_name"
                                type="name"
                                placeholder=""
                                onChange={(e) => setField("last_name", e.target.value)}
                                isInvalid={error.last_name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.last_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-muted">
                                Email
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

                        <Form.Group
                            className="mb-3 position-relative"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="text-muted">
                                Confirm Password
                            </Form.Label>
                            <Form.Control
                                className={styles.pass_input_box}
                                name="confirm_password"
                                type={showPass ? "text" : "password"}
                                placeholder=""
                                onChange={(e) => setField("confirm_password", e.target.value)}
                                isInvalid={error.confirm_password}
                            />

                            <Form.Control.Feedback type="invalid">
                                {error.confirm_password}
                            </Form.Control.Feedback>
                            <span
                                className={styles.pass_eye}
                                onClick={() => setShowPass(!showPass)}
                            >
                                {error.confirm_password ? null : showPass ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                            </span>
                        </Form.Group>

                        <br />
                        <div className="mb-4 d-flex justify-content-around">
                            <div>
                                <button
                                    className={styles.joinUs_btn}
                                    type="submit"
                                    onClick={handleSubmit}
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

export default JoinUsModal;
