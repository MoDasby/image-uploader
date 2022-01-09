import axios from "axios";

export const api = async (file) => {
    const API_BASE_URL = "http://localhost:8086/api/image";

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const request = await axios.post(`${API_BASE_URL}/upload`, file, config);

    return request.data;

}