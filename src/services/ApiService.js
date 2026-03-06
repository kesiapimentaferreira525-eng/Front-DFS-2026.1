import axios from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

export const getAllUsers = () => api.get(`/users`);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const getUserById = (id) => api.get(`/users/${id}`);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const saveUser = (data) => api.post(`/users`, data);
export const loginUser = (data) => api.post(`/login`, data);


export function isTokenValid(token) {

    try {
        const { id, exp } = jwtDecode(token);

        const now = Date.now() / 1000;

        return !!id && exp > now;

    } catch (error) {
        return false;
    }

}