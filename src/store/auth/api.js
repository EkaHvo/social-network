import { axiosInstance } from "../axois"

export const getAuth = async() => {
    return axiosInstance.get(`auth/me`).then(response => response.data)
}

export const postAuth = async(data) => {
    return axiosInstance.post(`auth/login`, data).then(response => response.data)
}

export const deleteAuth = async() => {
    return axiosInstance.delete(`auth/login`).then(response => response.data)
}
