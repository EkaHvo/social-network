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

export const postPhoto = async(file) => {
  const formData = new FormData();
  formData.append('image', file);

  return axiosInstance.put(`profile/photo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(response => response.data);
}
