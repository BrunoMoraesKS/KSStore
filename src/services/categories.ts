import api from "./storeApi";

export const CategoriesList = async () => {
  try {
    const { data } = await api.get(`/products/categories`);

    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};
