import React, {useState, useEffect} from "react";
import styles from "../../styles/components/Profile/ProfileSection.module.css";
import useAuth from "../../StateManager/useAuth";
import ProfileInputField from "./ProfileInputField";
import {BsFillCameraFill} from "react-icons/bs";
import {ImSpinner9, ImCancelCircle} from "react-icons/im";
import {MdEdit, MdOutlineFileUpload} from "react-icons/md";
import ProfileImageUpload from "./profileImageUpload";
import ImageCropperModal from "./imageCropping/ImageCropperModal";
import useHttpReq from "../../hooks/useHttpReq";
import {SweetModalPopup} from "../../utilities/SweetModalPopup";
import {useNavigate} from "react-router-dom";

const ProfileSection = () => {
    const [info, setInfo] = useState({});
    const {
        profileEditMode,
        setProfileEditMode,
        member,
        updateMember,
        liveLink,
        setLoading,
        logout,
        setProfileInputErrors,
    } = useAuth();
    const [showCropperModal, setShowCropperModal] = useState(false);

    const [imgUpLoading, setImgUpLoading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const {profileUpdateFormData, setProfileUpdateFormData} = useAuth();

    const navigate = useNavigate();
    const {putReq} = useHttpReq();
    const fieldMap = {
        name: "Name",
        email: "Email",
        description: "About",
        membershipID: "Membership ID",
        batch: "Batch",
        passingYear: "Passing Year",
        website: "Website",
        linkedin: "Linkedin",
        github: "Github",
        phone: "Phone",
        facebook: "facebook",
    };
    const fields = Object.keys(fieldMap);

    useEffect(() => {
        // console.log(member);

        const {
            accessToken,
            createdAt,
            msg,
            updatedAt,
            verified,
            __v,
            _id,
            contact,
            role,
            type,
            ...others
        } = member;
        const {email, ...restContacts} = contact;
        setInfo({...others, ...restContacts});
        console.log("infos -> ");
        console.log(info);
        setProfileEditMode(false);
        setProfileInputErrors({});
    }, [member]);

    const editBtnHandler = () => {
        setProfileEditMode(!profileEditMode);
        const {website, linkedin, github, email, phone, facebook, ...resInfo} =
            info;
        setProfileUpdateFormData({
            ...resInfo,
            email,
            contact: {
                website,
                linkedin,
                github,
                phone,
                facebook,
                email,
            },
        });
    };

    const updateHandler = async () => {
        // setLoading(true);

        try {
            setIsUpdating(true);
            const res = await putReq(liveLink + "/members", {
                ...profileUpdateFormData,
            });
            setIsUpdating(false);
            if (res?.data) {
                updateMember(res?.data);
                SweetModalPopup({
                    title: "Updated Successfully!",
                    icon: "success",
                }).then((result) => {
                    setProfileEditMode(false);
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
            } else if (res?.errors) {
                setProfileInputErrors(res?.errors);
            }
        } catch (err) {
            setLoading(false);
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

        // setLoading(false);
    };

    return (
        <div>
            <ImageCropperModal
                showCropperModal={showCropperModal}
                setShowCropperModal={setShowCropperModal}
                setImgUpLoading={setImgUpLoading}
            />
            <div className={styles.picture_wrapper}>
                <div className={styles.profile_picture_container}>
                    <div className={styles.profile_picture}>
                        <img src={member?.imgUrl} alt="" />
                    </div>
                    {profileEditMode && (
                        <div
                            className={styles.upload_image_icon}
                            onClick={() => {
                                document
                                    .getElementById("profileImageUpload")
                                    .click();
                            }}
                        >
                            {imgUpLoading ? (
                                <ImSpinner9 className={styles.upload_spinner} />
                            ) : (
                                <BsFillCameraFill />
                            )}
                        </div>
                    )}
                </div>
                {!profileEditMode && (
                    <p className={styles.member_type_label}>
                        {member?.type?.toUpperCase()}
                    </p>
                )}
                {!profileEditMode && (
                    <div className={styles.local_global_container}>
                        <div className={styles.local}>Request Local</div>

                        <div className={styles.global}>Request Global</div>
                    </div>
                )}
            </div>
            <div className={styles.all_info_wrapper}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <div className={styles.section_title}>My Profile</div>
                        {profileEditMode ? (
                            <div className="d-flex">
                                <button
                                    className={styles.button_style}
                                    onClick={() => {
                                        setProfileEditMode(false);
                                    }}
                                    style={{
                                        marginRight: "1rem",
                                        color: "#b11313",
                                        border: "2px Solid #b11313",
                                        backgroundColor: "white",
                                    }}
                                >
                                    <ImCancelCircle /> Cancel
                                </button>
                                <button
                                    className={styles.button_style}
                                    onClick={updateHandler}
                                >
                                    {isUpdating ? (
                                        <ImSpinner9
                                            className={styles.upload_spinner}
                                        />
                                    ) : (
                                        <MdOutlineFileUpload />
                                    )}{" "}
                                    Update
                                </button>
                            </div>
                        ) : (
                            <button
                                className={styles.button_style}
                                onClick={editBtnHandler}
                            >
                                <MdEdit /> Edit
                            </button>
                        )}
                    </div>
                    <div className={styles.hr_line}></div>
                    <div className={styles.info_section}>
                        <div className={styles.section_title}>
                            Personal Info
                        </div>
                        <div
                            className={styles.hr_line}
                            style={{width: "50%"}}
                        ></div>
                        <div
                            className={styles.info_wrapper}
                            style={
                                profileEditMode
                                    ? {gridTemplateColumns: "5fr 2fr"}
                                    : {gridTemplateColumns: "1fr"}
                            }
                        >
                            <div className={styles.informations}>
                                <div>
                                    {fields.map((key, index) => {
                                        return (
                                            <ProfileInputField
                                                key={key}
                                                value={
                                                    info[key]
                                                        ? info[key]
                                                        : "None!"
                                                }
                                                placeholder={
                                                    info[key]
                                                        ? info[key]
                                                        : "Enter " +
                                                          fieldMap[key]
                                                }
                                                name={key}
                                                label={fieldMap[key]}
                                                info={info}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            {profileEditMode && (
                                <ProfileImageUpload
                                    setShowCropperModal={setShowCropperModal}
                                    imgUpLoading={imgUpLoading}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
