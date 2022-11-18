import {Modal, Container, Form} from "react-bootstrap";
import styles from "../../styles/components/AuthStyles/SignInModal.module.css";
import React, {useState} from "react";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import {MdError} from "react-icons/md";
import {useNavigate} from "react-router-dom";

import useAuth from "../../StateManager/useAuth";
import {SweetModalPopup} from "../../utilities/SweetModalPopup";

const SignInModal = (props) => {
    let navigate = useNavigate();
    const [error, setError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        setFormData({...formData, [field]: value});
        if (error[field]) {
            setError({...error, [field]: false});
        }
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        setSignInModalToggle(!signInModalToggle);
        setJoinUsInModalToggle(!joinUsModalToggle);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validated = validate();
        if (validated) {
            const url = liveLink + "/members/login";
            await postData(url, formData)
                .then((data) => {
                    setLoading(false);
                    if (!data.email) {
                        error.password = data.msg;
                        setError({...error});
                    } else {
                        if (data?.verified) {
                            setAccessToken(data.accessToken);
                            setToLS("member", data);
                            console.log(data);
                            navigate("/");
                            setSignInModalToggle(false);
                            setMember(data);
                        } else {
                            SweetModalPopup({
                                title: "Your email isn't verified!",
                                text: 'To verify email now click "Verify Now".',
                                icon: "error",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Verify Now",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    const url =
                                        liveLink +
                                        "/members/verifyEmail/" +
                                        data?.email;
                                    console.log(`url -> ${url} `);

                                    fetch(url)
                                        .then((response) => response.json())
                                        .then((data) => {
                                            SweetModalPopup({
                                                title: "We sent You a Verification Mail!",
                                                text: data.msg,
                                                icon: "success",
                                            }).then((result) => {
                                                // setSignInModalToggle(false);
                                            });
                                        });
                                } else {
                                    // setSignInModalToggle(false);
                                }
                            });
                        }
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setLoading(false);
                });
        }
    };

    const validate = () => {
        const {email, password} = formData;

        let errorOcurred = false;

        // email
        if (/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
            error.email = false;
        } else {
            error.email = "Email is not valid";
            errorOcurred = true;
        }

        // password
        if (password.length > 0) {
            error.password = false;
        } else {
            error.password = "Password field can't be empty.";
            errorOcurred = true;
        }

        setError({...error});
        return !errorOcurred;
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
                    {loading ? "Signing In..." : "Sign In"}
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
                    <Form className="mx-auto" style={{width: "80%"}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-muted">
                                Enter Your Email
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
                                <MdError /> {error.email}
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
                                <MdError /> {error.password}
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
                        <br />
                        <div className={styles.forget_pass}>
                            <a style={{textDecoration: "none"}} href="htt">
                                Forget password?
                            </a>
                        </div>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="keepLogged"
                                name="keepLogged"
                                label={"Keep me signed in"}
                                onChange={(e) => {
                                    setField("keepMe", e.target.checked);
                                }}
                            />
                            <br></br>
                        </div>
                        <div className="mt-5 mb-4 d-flex justify-content-around">
                            <div>
                                <button
                                    className={styles.joinUs_btn}
                                    onClick={handleSignIn}
                                >
                                    Join Us
                                </button>
                            </div>

                            <div>
                                <button
                                    className={styles.signIn_btn}
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Sign In
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
