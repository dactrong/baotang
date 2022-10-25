import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:6666/news/"
});


export default instance