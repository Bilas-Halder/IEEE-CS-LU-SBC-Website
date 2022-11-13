import React, {useEffect} from "react";
import useAuth from "../../StateManager/useAuth";
import {SweetModalPopup} from "../../utilities/SweetModalPopup";

const AuthPage = ({page}) => {
    const {setJoinUsInModalToggle, setSignInModalToggle, member} = useAuth();
    useEffect(() => {
        if (!member?.email && page.toLowerCase() === "joinus") {
            setJoinUsInModalToggle(true);
            setSignInModalToggle(false);
        } else if (!member?.email && page.toLowerCase() === "signin") {
            setSignInModalToggle(true);
            setJoinUsInModalToggle(false);
        } else if (member.email) {
            SweetModalPopup({
                title: "Already Signed In!",
                text: "Please Logout to continue...",
                icon: "warning",
            });
        } else {
            SweetModalPopup({
                title: "Wrong Call!",
                text: "Please Check Carefully...",
                icon: "error",
            });
        }
    }, []);
    return <></>;
};

export default AuthPage;
