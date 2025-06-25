import { useContext, createContext, useState } from "react";
const CategoryContext = createContext();
import data from "../staticData/data.json";

const CategoryProvider = ({ children }) => {

  const [categoryId, setCategoryId] = useState(data.categories[0].id);
  const handleCategoryId = (index) => {
    setCategoryId(data.categories[index].id);
  };
  return (
    <CategoryContext.Provider value={{ categoryId, handleCategoryId }}>
      {children}
    </CategoryContext.Provider>
  );
};
const useCategory = () => useContext(CategoryContext);
export { CategoryProvider };
export default useCategory;
