import { API } from "./axiosClient";

export const login = async (data) => {
    const result = await API.post('/api/v1/auth/login', data).catch(error => {
        if (error.response && (error.response.status === 400 || error.response.status === 401)) {
            return {
                Error: error.response.data.error
            }
        } else {
            console.error('Error fetching data:', error);
        }
    });

    return result
}