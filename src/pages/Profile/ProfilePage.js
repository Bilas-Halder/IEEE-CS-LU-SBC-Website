import React from "react";
import ProfileSection from "../../components/Profile/ProfileSection";
import ProfileSideBar from "../../components/Profile/ProfileSideBar";
const ProfilePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5%",
      }}
    >
      <ProfileSideBar />
      <ProfileSection />
    </div>
  );
};

export default ProfilePage;
