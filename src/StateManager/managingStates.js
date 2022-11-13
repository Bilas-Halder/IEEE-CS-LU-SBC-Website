import {useState} from "react";
import {
    setAccessToken,
    getAccessToken,
    setToLS,
    getFromLS,
} from "../utilities/localStorage";

const useManagingStates = (props) => {
    const [signInModalToggle, setSignInModalToggle] = useState(false);
    const [joinUsModalToggle, setJoinUsInModalToggle] = useState(false);
    const [committeeMembersData, setCommitteeMembersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [member, setMember] = useState(() =>
        getFromLS("member") ? getFromLS("member") : {}
    );
    const [autoCompleteData, setAutoCompleteData] = useState([]);
    const liveLinkDomain = "https://ieeecslusbc.onrender.com";
    // const liveLinkDomain = "http://localhost:5000";
    const liveLinkVersion = "/api/v1";
    const liveLink = liveLinkDomain + liveLinkVersion;

    const postData = async (url, data) => {
        setLoading(true);
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    };

    const logout = () => {
        setToLS("member", "{}");
        setAccessToken("");
        setMember({});
    };

    return {
        signInModalToggle,
        setSignInModalToggle,
        joinUsModalToggle,
        setJoinUsInModalToggle,
        committeeMembersData,
        setCommitteeMembersData,
        autoCompleteData,
        setAutoCompleteData,
        liveLink,
        postData,
        setAccessToken,
        getAccessToken,
        setToLS,
        getFromLS,
        member,
        setMember,
        logout,
        loading,
        setLoading,
    };
};

export default useManagingStates;
