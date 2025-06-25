import data from "../../staticData/data.json";
import CustomeSlider from "../CustomeSlider";
import styled from "styled-components";

const BiographySection = styled.section`
  margin-bottom: 10px;
`;

const Biography = () => {
  const biographyData = data.movies.biography;
  const title = "Biography";
  return (
    <BiographySection>
      <CustomeSlider data={biographyData} title={title} />
    </BiographySection>
  );
};

export default Biography;
