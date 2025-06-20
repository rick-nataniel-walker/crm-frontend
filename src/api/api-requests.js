import axios from "axios";
export const getData = async (uri) => {
  return await axios.get(`${process.env.VUE_APP_BASE_URL}${uri}`);
};

export const storeFormData = async (uri, formData) => {
  return await axios.post(`${process.env.VUE_APP_BASE_URL}${uri}`, formData, {
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
