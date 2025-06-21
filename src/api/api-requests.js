import axios from "axios";

export const getData = async (uri) => {
  return await axios.get(`http://127.0.0.1:8000${uri}`);
};

export const deleteData = async (uri) => {
  return await axios.delete(`http://127.0.0.1:8000${uri}`);
};

export const storeFormData = async (uri, formData) => {
  return await axios.post(`http://127.0.0.1:8000${uri}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const patchFormData = async (uri, formData) => {
  return await axios.patch(`${process.env.VUE_APP_BASE_URL}${uri}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
    },
  });
};
