import { getData, storeFormData } from "@/api/api-requests";

const baseUrl = "/api/posts";

export const createArticle = (form) => {
  storeFormData(baseUrl, form)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const fetchArticles = async () => {
  return await getData(baseUrl);
};
