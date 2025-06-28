import {
  deleteData,
  getData,
  patchFormData,
  storeFormData,
} from "@/api/api-requests";

const baseUrl = "/api/categories";
export const createCategory = async (form) => {
  let payload = await storeFormData(baseUrl, form);
  return payload.data.data;
};

export const fetchCategories = async () => {
  let payload = await getData(baseUrl);
  return payload.data.data;
};

export const updateCategory = async (formData) => {
  let payload = await patchFormData(`${baseUrl}/${formData.id}`, formData);
  return payload.data.data;
};

export const deleteCategory = async (id) => {
  let payload = await deleteData(`${baseUrl}/${id}`);
  return payload.data.data;
};
