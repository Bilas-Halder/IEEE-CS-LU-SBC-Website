import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventsPageComponents/EventCard";
import styles from "../../styles/components/EventPage/Activities.module.css";

const EventPage = ({ to }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://ieee-cs-lu-sbc.herokuapp.com/events")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((error) => {
                console.error(error)
            });
    }, []);


    return (
        <div>
            <div className={styles.banner}>
                <h1 style={{ color: "white" }}>
                    {to === "news" ? "Latest News" : to === "events" ? "Our Events" : to === "publications" ? "Our Publications" : to === "achievements" ? "Our Achievements" : "Our Activities"}
                </h1>
            </div>
            {
                to === 'events' ? <div className={styles.title}>
                    <h1 className={`fw-bold ${styles.achievement_border}`}>
                        {" "}
                        <span className={`${styles.our}`}>Upcoming </span>{" "}
                        <span className={`${styles.achievement}`}>
                            {" "}
                            Events{" "}
                        </span>{" "}
                    </h1>
                </div>
                    : null
            }



            {events.length
                ? events.map((event, index) => (
                    <EventCard event={event} key={event["_id"]} index={index} />
                ))
                : null}

            <footer style={{ padding: "5%" }}></footer>
        </div>
    );
};

export default EventPage;
