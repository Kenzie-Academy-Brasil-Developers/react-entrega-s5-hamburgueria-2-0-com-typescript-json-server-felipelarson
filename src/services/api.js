import axios from "axios"

const api = axios.create({
    baseURL: "https://api-hamb.herokuapp.com"
})

export default api