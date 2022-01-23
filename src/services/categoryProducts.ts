import api from "./storeApi";

export const CategoryProductsList = async (category: any) => {
  try {
    const { data } = await api.get(`/products/category/${category}`);

    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};
