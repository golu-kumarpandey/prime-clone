import data from "../../staticData/data.json";
import styled from "styled-components";
import CustomeSlider from "../CustomeSlider";

const RomanticSection = styled.section`
  margin-bottom: 10px;
`;

const Romantic = () => {
  const romanticData = data.movies.romantic;
  const title = "Romantic";
  return (
    <RomanticSection>
      <CustomeSlider data={romanticData} title={title} />
    </RomanticSection>
  );
};
export default Romantic;
