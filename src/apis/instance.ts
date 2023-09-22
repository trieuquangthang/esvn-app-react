import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5003/api",
    timeout: 15000,
    headers: {
        "Content-Type" : "application/json; charset=utf-8"
    }
})

export default instance