import { axiosInstance } from "../axois";

export const getUsers = async(data) => {
  return axiosInstance.get(`users?page=${data.currentPage}&count=${data.pageSize}`).then(response => response.data);
}

export const postFollowUser = async(id) => {
  return axiosInstance.post(`follow/${id}`).then(response => response.data);
}

export const deleteFollowUser = async(id) => {
  return axiosInstance.delete(`follow/${id}`).then(response => response.data)
}
