import {
  deleteData,
  getData,
  patchFormData,
  storeFormData,
} from "@/api/api-requests";

const baseUrl = "/api/posts";

export const createArticle = async (form) => {
  let payload = await storeFormData(baseUrl, form);
  return payload.data.data;
};
export const fetchArticles = async () => {
  return await getData(baseUrl);
};
export const deleteArticle = async (id) => {
  const deletedArticle = await deleteData(`${baseUrl}/${id}`);
  return deletedArticle.data.data;
};

export const updateArticle = async (formData) => {
  const patchedData = await patchFormData(
    `${baseUrl}/${formData.id}`,
    formData
  );
  return patchedData.data.data;
};
