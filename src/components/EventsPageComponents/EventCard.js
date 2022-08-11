import React from 'react';
import styles from "../../styles/components/EventPage/EventCard.module.css"

const EventCard = ({ event, index }) => {
    return (
        <div
            className={styles.wrapper}
            key={event["_id"]}
            style={
                index % 2 === 1
                    ? { flexDirection: "row-reverse" }
                    : null
            }
        >
            <div className={styles.poster_section}>
                <div className={styles.img_container}>
                    <img alt="event_poster"
                        src={event.image}
                        className={styles.img_style}
                    />
                </div>
            </div>
            <div className={styles.info_section}>
                <div className={styles.heading_section}>
                    <h2>Heading</h2>
                    <span>Sub Heading</span>
                </div>
                <div className={styles.date_time_section}>
                    <span>
                        <strong>Date: </strong>
                        <span>{event.date}</span>
                    </span>
                    <span>
                        <strong>Time: </strong>
                        <span>{event.time}</span>
                    </span>
                </div>
                <div>
                    <h4>Objective</h4>
                    <p>{event.objective}</p>
                </div>
                <div className={styles.button_section}>
                    <button className={styles.button_style}>
                        Interested
                    </button>
                    <button
                        className={styles.button_style}
                        style={{
                            background: "white",
                            color: "black",
                            border: "1px solid #E7AB53",
                        }}
                    >
                        Join Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;