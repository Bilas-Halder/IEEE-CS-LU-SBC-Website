import {Modal, Container, Form} from "react-bootstrap";
import styles from "../../styles/components/AuthStyles/SignInModal.module.css";
import React, {useState} from "react";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import useAuth from "../../StateManager/useAuth";
import {useNavigate} from "react-router-dom";
import {SweetModalPopup} from "../../utilities/SweetModalPopup";

const JoinUsModal = (props) => {
    let navigate = useNavigate();
    const [error, setError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const {
        signInModalToggle,
        setSignInModalToggle,
        joinUsModalToggle,
        setJoinUsInModalToggle,
        liveLink,
        postData,
        setAccessToken,
        setToLS,
        setMember,
        setLoading,
        loading,
    } = useAuth();

    const setField = (field, value) => {
        console.log(field, value);
        setFormData({...formData, [field]: value});
        if (error[field]) {
            setError({...error, [field]: false});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validated = validate();

        if (validated) {
            console.log(formData);
            const url = liveLink + "/members/signup";
            await postData(url, formData)
                .then((data) => {
                    console.log(data);
                    setLoading(false);
                    if (data.errors) {
                        const keys = Object.keys(data.errors);
                        console.log(keys);
                        for (let i = 0; i < keys.length; i++) {
                            const err = data.errors[keys[i]];

                            error[keys[i]] = err.msg;
                        }

                        setError({...error});
                    } else {
                        SweetModalPopup({
                            title: "Sign Up Successful!",
                            text: data?.msg,
                            icon: "success",
                            showCancelButton: true,
                            confirmButtonColor: "#d33",
                            cancelButtonColor: "#3085d6",
                            confirmButtonText: "Resend",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const url =
                                    liveLink +
                                    "/members/verifyEmail/" +
                                    data?.data?.email;
                                console.log(`url -> ${url} `);

                                fetch(url)
                                    .then((response) => response.json())
                                    .then((data) => {
                                        SweetModalPopup({
                                            title: "We Resend You a Verification Mail!",
                                            text: data.msg,
                                            icon: "success",
                                        }).then((result) => {
                                            setJoinUsInModalToggle(false);
                                        });
                                    });
                            } else {
                                setJoinUsInModalToggle(false);
                            }
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setLoading(false);
                });
        }
    };

    const validate = () => {
        const {name, email, password, confirmPassword} = formData;

        let isValidated = true;

        // first name
        if (/^[A-Za-z ]+$/.test(name)) {
            error.name = false;
        } else if (name.length < 3) {
            isValidated = false;
            error.name = "First Name must be at least 3 characters long";
        } else {
            isValidated = false;
            error.name = "First Name must be alphabets and only";
        }

        // email
        if (/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
            error.email = false;
        } else {
            isValidated = false;
            error.email = "Email is not valid";
        }

        // password
        if (/^[A-Za-z @$!%*#;?&\d]{6,20}$/.test(password)) {
            error.password = false;

            if (password !== confirmPassword) {
                isValidated = false;
                error.confirmPassword = "Passwords do not match";
            }
        } else if (password.length < 6) {
            error.password = "Password must be at least 6 characters long";
            isValidated = false;
        } else {
            error.password =
                "Password can contain only alphabets, numbers and @$!%*#?& characters";
            isValidated = false;
        }

        setError({...error});

        return isValidated;
    };

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName={styles.modal_radius}
        >
            <h1 className="fs-1 fw-bold text-center mt-4 mb-3">
                <span className={styles.sign_title}>
                    {loading ? "Joining..." : "Join US"}
                </span>
            </h1>

            {/* horizontal line er code  */}

            <div className={styles.hr_line_container}>
                <div
                    className={
                        loading
                            ? styles.hr_line_loading_box
                            : styles.hr_line_box
                    }
                >
                    <div className={styles.hr_line_yel}> </div>
                    <div className={styles.hr_line_blu}> </div>
                </div>
            </div>
            {/*  */}

            <Modal.Body className={styles.signIn_modal}>
                <Container>
                    <Form noValidate className="mx-auto" style={{width: "80%"}}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicFirstName"
                        >
                            <Form.Label className="text-muted">
                                Full Name
                            </Form.Label>
                            <Form.Control
                                className={styles.input_box}
                                name="name"
                                type="name"
                                placeholder=""
                                onChange={(e) =>
                                    setField("name", e.target.value)
                                }
                                isInvalid={error.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.name}
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
                                onChange={(e) =>
                                    setField("email", e.target.value)
                                }
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
                                onChange={(e) =>
                                    setField("password", e.target.value)
                                }
                                isInvalid={error.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.password}
                            </Form.Control.Feedback>
                            {error.password ? null : (
                                <span
                                    className={styles.pass_eye}
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {showPass ? (
                                        <BsFillEyeSlashFill />
                                    ) : (
                                        <BsFillEyeFill />
                                    )}
                                </span>
                            )}
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
                                name="confirmPassword"
                                type={showPass ? "text" : "password"}
                                placeholder=""
                                onChange={(e) =>
                                    setField("confirmPassword", e.target.value)
                                }
                                isInvalid={error.confirmPassword}
                            />

                            <Form.Control.Feedback type="invalid">
                                {error.confirmPassword}
                            </Form.Control.Feedback>
                            <span
                                className={styles.pass_eye}
                                onClick={() => setShowPass(!showPass)}
                            >
                                {error.confirmPassword ? null : showPass ? (
                                    <BsFillEyeSlashFill />
                                ) : (
                                    <BsFillEyeFill />
                                )}
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
