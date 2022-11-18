import React from "react";
import ProfileSection from "../../components/Profile/ProfileSection";
import ProfileSideBar from "../../components/Profile/ProfileSideBar";
import useAuth from "../../StateManager/useAuth";

import styles from "../../styles/components/Profile/ProfileSideBar.module.css";
const ProfilePage = () => {
    const {profileEditMode} = useAuth();
    return (
        <div
            className={styles.profile_page_container}
            style={
                profileEditMode
                    ? {
                          gridTemplateColumns: "1fr",
                      }
                    : {}
            }
        >
            <ProfileSideBar />
            <ProfileSection />
        </div>
    );
};

export default ProfilePage;
