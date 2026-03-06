import axios from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
})

// Operações de Usuário
export const getAllUsers = () => api.get(`/users`);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const getUserById = (id) => api.get(`/users/${id}`);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const saveUser = (data) => api.post(`/users`, data);

// Operações de Ofertas
export const getAllOffers = (params) => api.get(`/offers`, { params });
export const getOfferById = (id) => api.get(`/offers/${id}`);
export const createOffer = (data) => api.post(`/offers`, data);
export const updateOffer = (id, data) => api.put(`/offers/${id}`, data);
export const deleteOffer = (id) => api.delete(`/offers/${id}`);

// Autenticação e Registro
export const loginUser = (data) => api.post(`/login`, data);
export const registerUser = (data) => api.post(`/users`, data);

/**
 * Verifica se o token JWT é válido e não expirou
 */
export function isTokenValid(token) {
    if (!token) return false;

    try {
        const { id, exp } = jwtDecode(token);
        const now = Date.now() / 1000;

        return !!id && exp > now;
    } catch (error) {
        return false;
    }
}

export default api;