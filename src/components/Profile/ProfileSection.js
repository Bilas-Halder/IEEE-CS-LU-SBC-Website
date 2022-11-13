import React, { useState, useEffect } from "react";
import styles from "../styles/ProfileSection.module.css";
import Form from "react-bootstrap/Form";

const ProfileSection = () => {
  const [info, setInfo] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const editBtnHandler = () => {
    if (editMode === false) {
      console.log("false");
      setEditMode(true);
    } else {
      console.log("true");
      setEditMode(false);
    }
  };

  useEffect(() => {
    fetch("./asset/ProfileSection.json")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.section_title}>My Profile</div>
          <button className={styles.button_style} onClick={editBtnHandler}>
            {editMode ? "Update" : "Edit"}
          </button>
        </div>
        <div className={styles.hr_line}></div>
        <div className={styles.info_section}>
          <div className={styles.section_title}>Personal Info</div>
          <div className={styles.hr_line} style={{ width: "50%" }}></div>
          <div className={styles.info_wrapper}>
            <div className={styles.informations}>
              {info.length
                ? info.map((element) => (
                    <div key={1}>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Name:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.name}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>User Name:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.user_name}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Email:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.email}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Phone:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.phone}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Gender:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.gender}</p>
                        )}
                      </div>
                      <div
                        className={styles.text_items}
                        style={{ alignItems: "start" }}
                      >
                        <div className={styles.title}>About:</div>
                        <div
                          style={{
                            border: "1px solid black",
                            borderRadius: "5px",
                            padding: "2%",
                          }}
                        >
                          {editMode ? (
                            <Form.Control as="textarea" rows={3} />
                          ) : (
                            <p>{element.about}</p>
                          )}
                        </div>
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Github:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.github}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>LinkedIn:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.linkedin}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Facebook:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.facebook}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Membership ID:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.membership_id}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Student ID:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.student_id}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Current Year:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.current_year}</p>
                        )}
                      </div>
                      <div className={styles.text_items}>
                        <div className={styles.title}>Passing Year:</div>
                        {editMode ? (
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            style={{ width: "50%" }}
                          />
                        ) : (
                          <p>{element.passing_year}</p>
                        )}
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className={styles.img_section}>
              <div className={styles.profile_picture}></div>
              <div className={styles.button_wrapper}>
                <button
                  className={styles.button_style}
                  style={{ borderRadius: "10px", width: "150px" }}
                >
                  Upload
                </button>
                <button
                  className={styles.button_style}
                  style={{
                    marginTop: "20%",
                    borderRadius: "10px",
                    width: "150px",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
