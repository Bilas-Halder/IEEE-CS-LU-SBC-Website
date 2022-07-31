import React from 'react';
import { useParams } from 'react-router-dom';

const DynamicEvent = (props) => {
    let params = useParams();
    return (
        <div>
            From DynamicEvent page
            <h1>EventId : {params.eventId}</h1>
        </div>
    );
};

export default DynamicEvent;