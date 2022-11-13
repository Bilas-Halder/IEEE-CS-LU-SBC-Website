import React from 'react'
import styles from '../styles/ProfileSideBar.module.css' 
import ProgressBar from 'react-bootstrap/ProgressBar';
const ProfileSideBar = () => {
  return (
    <div>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.profile_picture}>
                </div>
                <button className={styles.button_style}>Guest</button>
                <div style={{width: "100%"}}>
                    <ProgressBar now={70} label="70%" />
                </div>
                <button className={styles.button_style} style={{borderRadius: "10px"}}>My Profile</button>
                <button className={styles.tab_style_button}>Request Local Member</button>
                <div className={styles.hr_line}></div>
                <button className={styles.tab_style_button}>Request Global Member</button>
                <div className={styles.hr_line}></div>
                <button className={styles.tab_style_button}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileSideBar