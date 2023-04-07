import { axiosInstance } from "../axois";

export const getProfile = async(id) => {
  return axiosInstance.get(`profile/${id}`).then(response => response.data);
}

export const getStatus = async(id) => {
  return axiosInstance.get(`profile/status/${id}`).then(response => response.data);
}

export const putStatus = async(status) => {
  return axiosInstance.put(`profile/status`, {status}).then(response => response.data);
}
