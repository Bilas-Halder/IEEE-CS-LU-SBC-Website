import React, {useState} from "react";
import {Form} from "react-bootstrap";
import useAuth from "../../StateManager/useAuth";
import styles from "../../styles/components/Profile/ProfileSection.module.css";
import {BiCopy} from "react-icons/bi";
import {RiErrorWarningLine} from "react-icons/ri";
import {makeAToast} from "../../utilities/makeAToast";

const ProfileInputField = ({
    type = "text",
    placeholder = "None!",
    style = {},
    value = "",
    name,
    label,
    info,
}) => {
    const {
        profileEditMode,
        profileUpdateFormData,
        setProfileUpdateFormData,
        profileInputErrors,
    } = useAuth();

    const copyClickHandler = () => {
        navigator.clipboard.writeText(value ? value : "None!");
        makeAToast("Copied to clipboard.");
    };

    const onChange = (e) => {
        const data = {...profileUpdateFormData};
        const field = e.target.name;
        let value = e.target.value;
        const contactFields = {
            website: 1,
            linkedin: 1,
            github: 1,
            phone: 1,
            facebook: 1,
        };
        if (value === "") {
            value = info[value];
            console.log(value);
        }
        if (contactFields[field] === 1) {
            data.contact[field] = value;
        } else {
            data[field] = value;
        }

        setProfileUpdateFormData(data);
    };

    return (
        <div className={styles.text_items}>
            <div className={styles.title}>{label ? label : name} :</div>
            {profileEditMode ? (
                <div style={{width: "60%"}}>
                    <Form.Control
                        className={styles.input}
                        type={type}
                        placeholder={placeholder}
                        style={
                            profileInputErrors[name]
                                ? {...style, border: "1px solid #b11313"}
                                : style
                        }
                        name={name}
                        disabled={name === "email" ? true : false}
                        onChange={onChange}
                    />
                    {profileInputErrors[name] && (
                        <div className={styles.input_error}>
                            <RiErrorWarningLine />{" "}
                            {profileInputErrors[name]?.msg}
                        </div>
                    )}
                </div>
            ) : (
                <p
                    className={styles.value}
                    style={{cursor: "pointer"}}
                    onClick={copyClickHandler}
                >
                    <span>{value}</span>
                    <BiCopy className={styles.copy_icon} />
                </p>
            )}
        </div>
    );
};

export default ProfileInputField;
