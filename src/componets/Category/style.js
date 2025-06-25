import styled from "styled-components";

const CategorySection = styled.section`
  margin-bottom: 35px;

  @media screen and (max-width: 479px) {
    margin-bottom: 20px;
  }

  .content {
    border: 1px solid
      ${({ $loading, $loadingColor }) => {
        console.log($loadingColor);
        return $loading ? $loadingColor : "#c3073f";
      }};

    border-radius: 10px;
    background-color: ${({ theme }) => (theme.dark ? "#0D0D0D" : "#EFEEEA")};
    padding: 6px 10px;
  }

  .header {
    margin-bottom: 13px;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    color: #c3073f;
  }

  .btn-list {
    display: flex;
    gap: 22px;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 0px;
    @media screen and (max-width: 479px) {
      gap: 10px;
    }
  }

  .btn-list li {
    flex: 1;
    list-style: none;
    @media screen and (max-width: 1199px) {
      flex: 0 0 calc((100% - 88px) / 4);
    }

    @media screen and (max-width: 767px) {
      flex: 1 0 calc((100% - 44px) / 2);
    }
  }

  .category-btn {
    border-radius: 10px;
    width: 100%;
    background-color: ${({ theme }) => (theme.dark ? "#1a1a1d" : "#ffffff")};
    padding: 5px 20px;
    color: ${({ theme }) => (theme.dark ? "#ffffff" : "#1a1a1d")};
    font-size: 15px;
    font-weight: 600;

    &.active {
      border: 1px solid #c3073f;
      color: #c3073f;
    }
  }
`;

export default CategorySection;
