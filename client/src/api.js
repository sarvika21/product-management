
import axios from "axios";

const API = axios.create({
    baseURL: "https://product-management-n4no.onrender.com/api",
});

export default API;
