import data from "../../staticData/data.json";
import CategorySection from "./style";
import { Button, Skeleton, Box } from "@mui/material";
import useCategory from "../../context/CategoryContext";
import useCustomeLoader from "../../context/CustomeLoadingContext";
import useLoading from "../../context/LoadingContext";

const Category = () => {
  const { categoryId, handleCategoryId } = useCategory();
  const { hanldeCustomeLoader } = useCustomeLoader();
  const { loading, loadingColor, backgroundGradient } = useLoading();

  const onCategoryClick = (index) => {
    handleCategoryId(index);
    hanldeCustomeLoader();
  };

  return (
    <CategorySection
      $loading={loading}
      $loadingColor={loadingColor}
      $lodingBg={backgroundGradient}
    >
      <div className="container">
        {loading ? (
          <div className="content">
            <ul className="btn-list">
              {data.categories.map((btn, index) => (
                <li key={btn.id}>
                  <Skeleton
                    variant="rectangular"
                    className="category-btn"
                    width={60}
                    sx={{ background: backgroundGradient }}
                  ></Skeleton>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="content">
            <ul className="btn-list">
              {data.categories.map((btn, index) => (
                <li key={btn.id}>
                  <Button
                    className={`category-btn ${
                      categoryId === btn.id ? "active" : ""
                    }`}
                    onClick={() => onCategoryClick(index)}
                  >
                    {btn.text}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </CategorySection>
  );
};

export default Category;
