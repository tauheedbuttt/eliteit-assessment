
import api from "../config/api"

export const getStars = async (obj) => {
    const params = obj.queryKey[1];
    const response = await api.get("/star", { params });
    return response?.data?.data;
}

export const addStar = async (data) => {
    const response = await api.post("/star/add", data);
    return response?.data?.data;
}

export const updateStar = async ({ data, id }) => {
    const response = await api.put(`/star/update/${id}`, data);
    return response?.data?.data;
}

export const deleteStar = async (id) => {
    const response = await api.delete(`/star/delete/${id}`);
    return response?.data?.data;
}