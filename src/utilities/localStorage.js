export const setToLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
export const getFromLS = (key) => {
    const data = localStorage.getItem(key);
    console.log(data);
    if (data !== undefined) {
        console.log(data);
        return JSON.parse(data);
    } else {
        return {};
    }
};

export const getAccessToken = () => {
    return "Bearer " + getFromLS("accessToken");
};

export const setAccessToken = (value) => {
    setToLS("accessToken", value);
};
