export const setToLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
export const getFromLS = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const getAccessToken = () => {
    return "Bearer " + getFromLS("accessToken");
};

export const setAccessToken = (value) => {
    setToLS("accessToken", value);
};
