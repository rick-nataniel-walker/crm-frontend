import { storeFormData } from "@/api/api-requests";

const baseUrl = "api/articles";

export const createArticle = (form) => {
  storeFormData(baseUrl, form)
    .then((result) => {
      console.log(result);
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
