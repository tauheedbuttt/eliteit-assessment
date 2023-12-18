
import api from "../config/api"

export const getProducts = async (obj) => {
    const params = obj.queryKey[1];
    const response = await api.get("/product", { params });
    return response?.data?.data;
}

export const addProduct = async (data) => {
    const response = await api.post("/product/add", data);
    return response?.data?.data;
}

export const updateProduct = async ({ data, id }) => {
    const response = await api.put(`/product/update/${id}`, data);
    return response?.data?.data;
}

export const deleteProduct = async (id) => {
    const response = await api.delete(`/product/delete/${id}`);
    return response?.data?.data;
}