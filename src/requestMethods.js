import axios from "axios";
const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTBlMTkwMzYyYzA2ZTllMmYyNTllNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMjk3ODA4MywiZXhwIjoxNzMzMDY0NDgzfQ.A9kqFOtAemZDseRN8TjxRT9_11gUvUczFQ_d5AzhJ_s"
export const publicRequest= axios.create({
    baseURL:BASE_URL
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{
        token:`Bearer ${TOKEN}`
    }
})