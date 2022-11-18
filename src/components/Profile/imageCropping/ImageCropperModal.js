import {Modal, Form} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import styles from "./styles.module.css";
import useAuth from "../../../StateManager/useAuth";
import {uploadImageToImgbb} from "../../../utilities/uploadImageToImgbb";
import {SweetModalPopup} from "../../../utilities/SweetModalPopup";
import {useNavigate} from "react-router-dom";
import useHttpReq from "../../../hooks/useHttpReq";

const ImageCropperModal = ({
    showCropperModal,
    setShowCropperModal,
    setImgUpLoading,
}) => {
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const {
        profileImgURL,
        setProfileImgURL,
        member,
        liveLink,
        logout,
        updateMember,
    } = useAuth();

    const {putReq} = useHttpReq();

    const navigate = useNavigate();

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const uploadProfileImage = async (file) => {
        try {
            await setImgUpLoading(true);
            const {data} = await uploadImageToImgbb(file);
            const imgURL = data?.display_url;

            console.log(imgURL);
            const res = await putReq(liveLink + "/members", {
                imgUrl: imgURL,
            });
            if (res?.data) {
                updateMember(res?.data);
                SweetModalPopup({
                    title: "Profile Pic Updated Successfully.",
                    icon: "success",
                });
            } else if (res?.error || res?.err) {
                SweetModalPopup({
                    title: res?.error
                        ? res.error.msg
                            ? res.error.msg
                            : res.error?.message
                        : res.err.msg
                        ? res.err.msg
                        : res.err?.message,
                    icon: "error",
                    // showCancelButton: true,
                    // confirmButtonColor: "#3085d6",
                    // cancelButtonColor: "#d33",
                    confirmButtonText: "Ok",
                });
            }
            console.log(res);
            setImgUpLoading(false);
        } catch (err) {
            setImgUpLoading(false);
            console.log(err);
            if (err?.response?.status === 419) {
                SweetModalPopup({
                    title: "Session Expired! ",
                    text: "Please Login to Continue.!",
                    icon: "error",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Login",
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("confirmed");
                        logout();
                        navigate("/signin");
                    } else {
                        console.log("not confirmed");
                        logout();
                        navigate("/");
                    }
                });
            }
        }
    };

    const showCroppedImage = useCallback(async () => {
        try {
            const {file, url} = await getCroppedImg(
                profileImgURL,
                croppedAreaPixels,
                rotation
            );
            file.name = member?.email + ".jpeg";
            setProfileImgURL(url);
            setShowCropperModal(false);
            uploadProfileImage(file);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels, rotation]);

    const onClose = useCallback(() => {
        setProfileImgURL(profileImgURL);
        setShowCropperModal(false);
    }, []);

    return (
        <Modal
            show={showCropperModal}
            onHide={() => setShowCropperModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName={styles.img_cropper_modal}
            backdrop="static"
        >
            <Modal.Body className={styles.img_cropper_modal_body}>
                <div className={styles.cropper_wrapper}>
                    <Cropper
                        image={profileImgURL}
                        crop={crop}
                        rotation={rotation}
                        zoom={zoom}
                        aspect={1 / 1}
                        onCropChange={setCrop}
                        onRotationChange={setRotation}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
                <div className={styles.cropper_activities}>
                    <div className={styles.cropper_zoom}>
                        <Form.Label>Zoom :</Form.Label>
                        <Form.Range
                            style={{width: "75%"}}
                            onChange={(e) => {
                                const value = (5 * e.target.value) / 100;

                                setZoom(parseInt(value) >= 1 ? value : 1);
                                console.log(value);
                            }}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.cancel_btn} onClick={onClose}>
                            Cancel
                        </div>
                        <div
                            className={styles.done_btn}
                            onClick={showCroppedImage}
                        >
                            Done
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ImageCropperModal;
