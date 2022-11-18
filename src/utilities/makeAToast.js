import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const makeAToast = (
    text = "Made a Toast.",
    type = "success",
    options
) => {
    toast[type](text, {
        position: options?.position ? options.position : "bottom-right",
        autoClose: options?.duration ? options.duration : 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: options?.darkTheme ? "dark" : "light",
    });
};
