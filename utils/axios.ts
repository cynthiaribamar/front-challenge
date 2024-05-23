import axios from "axios";

const baseUrl = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1"

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});
