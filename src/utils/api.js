import axios from "axios";

export const uploadFile = async (file) => {

    const API_BASE_URL = "https://image-uploader-modasby.herokuapp.com/api/image";

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const request = await axios.post(`${API_BASE_URL}/upload`, file, config);

    return request.data;
}