import axios from "axios";

export const uploadImageToImgbb = async (image) => {
    const formData = new FormData();
    formData.append("key", process.env.REACT_APP_IMGBB_API_KEY);
    formData.append("image", image);

    const res = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: formData,
    });
    console.log(res);
    return res?.data;
};
