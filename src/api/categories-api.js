import { getData, storeFormData } from "@/api/api-requests";

const baseUrl = "/api/categories";
export const createCategory = (form) => {
  storeFormData(baseUrl, form)
    .then((resolve) => {
      return resolve.data;
    })
    .catch((err) => {
      return err.data;
    });
};

export const fetchCategories = async () => {
  let payload = await getData(baseUrl);
  return payload.data.data;
};
