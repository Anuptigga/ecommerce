import axios from "axios";
const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTBlMTkwMzYyYzA2ZTllMmYyNTllNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMjI5MzY4MiwiZXhwIjoxNzMyMzgwMDgyfQ.O7ln-nQI1bIiiLoWmSmBo9-Wbj23rhLgHauGvTBRETM"
export const publicRequest= axios.create({
    baseURL:BASE_URL
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{
        token:`Bearer ${TOKEN}`
    }
})