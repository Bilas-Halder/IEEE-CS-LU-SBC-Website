import React, { useState } from 'react';

const AuthModalToggle = (props) => {

    const [signInModalToggle, setSignInModalToggle] = useState(false);
    const [joinUsModalToggle, setJoinUsInModalToggle] = useState(false);

    return {
        signInModalToggle,
        setSignInModalToggle,
        joinUsModalToggle,
        setJoinUsInModalToggle
    }
};

export default AuthModalToggle;