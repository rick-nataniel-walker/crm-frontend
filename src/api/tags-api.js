import {
  deleteData,
  getData,
  patchFormData,
  storeFormData,
} from "@/api/api-requests";

const baseUrl = "/api/tags";
export const createTag = async (form) => {
  let payload = await storeFormData(baseUrl, form);
  return payload.data.data;
};

export const fetchTags = async () => {
  let payload = await getData(baseUrl);
  return payload.data.data;
};

export const updateTag = async (formData) => {
  let payload = await patchFormData(`${baseUrl}/${formData.id}`, formData);
  return payload.data.data;
};

export const deleteTag = async (id) => {
  let payload = await deleteData(`${baseUrl}/${id}`);
  return payload.data.data;
};
