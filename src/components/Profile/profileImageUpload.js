import React, {useState} from "react";
import styles from "../../styles/components/Profile/ProfileSection.module.css";
import useAuth from "../../StateManager/useAuth";
import {FiTrash2} from "react-icons/fi";
import {BsFillCameraFill} from "react-icons/bs";
import {ImSpinner9} from "react-icons/im";
import useHttpReq from "../../hooks/useHttpReq";
import {SweetModalPopup} from "../../utilities/SweetModalPopup";

const ProfileImageUpload = ({setShowCropperModal, imgUpLoading}) => {
    const {member, liveLink, updateMember, setProfileImgURL} = useAuth();
    const defaultProfileImgURL =
        "https://i.ibb.co/FzCXQJH/ieee-Default-Avater.jpg";
    const {putReq} = useHttpReq();

    const [removingImg, setRemovingImg] = useState(false);

    const imageSelectHandler = (event) => {
        const image = event.target.files[0];
        console.log("image -> ");
        console.log(image);
        setProfileImgURL(URL.createObjectURL(image));
        setShowCropperModal(true);
    };

    return (
        <div className={styles.img_section}>
            <div className={styles.profile_picture}>
                <img src={member?.imgUrl} alt="" />
            </div>
            <div className={styles.button_wrapper}>
                <label
                    className={styles.button_style}
                    style={{
                        borderRadius: "10px",
                        width: "150px",
                    }}
                >
                    {imgUpLoading ? (
                        <ImSpinner9 className={styles.upload_spinner} />
                    ) : (
                        <BsFillCameraFill />
                    )}{" "}
                    Upload
                    <input
                        type="file"
                        name="profileImage"
                        id="profileImageUpload"
                        accept="image/png, image/jpeg, image/jpg"
                        style={{display: "none"}}
                        onChange={imageSelectHandler}
                    />
                </label>
                <button
                    className={styles.button_style}
                    onClick={async () => {
                        setRemovingImg(true);
                        try {
                            const res = await putReq(liveLink + "/members", {
                                imgUrl: defaultProfileImgURL,
                            });
                            setRemovingImg(false);

                            if (res?.data) {
                                updateMember(res?.data);
                                SweetModalPopup({
                                    title: "Profile Pic Removed Successfully.",
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
                                });
                            }
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                    style={{
                        marginTop: "20%",
                        borderRadius: "10px",
                        width: "150px",
                    }}
                >
                    {removingImg ? (
                        <ImSpinner9 className={styles.upload_spinner} />
                    ) : (
                        <FiTrash2 />
                    )}{" "}
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ProfileImageUpload;
