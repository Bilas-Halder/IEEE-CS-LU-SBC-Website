import axios from "axios";
import {useEffect, useState} from "react";
import useAuth from "../StateManager/useAuth";
import {getAccessToken} from "../utilities/localStorage";

export default function useHttpReq() {
    const putReq = async (url, updates) => {
        try {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: getAccessToken(),
                },
                body: JSON.stringify(updates),
            });
            const data = await res?.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    return {
        // axiosInstance,
        putReq,
    };
}
