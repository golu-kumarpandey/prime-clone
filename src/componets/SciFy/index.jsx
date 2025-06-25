import styled from "styled-components";
import data from "../../staticData/data.json";
import CustomeSlider from "../CustomeSlider";

const ScifySection = styled.section`
  margin-bottom: 10px;
`;

const SciFy = () => {
  const scifyData = data.movies.sciFy;
  console.log(scifyData);
  const title = "SciFy";
  return (
    <ScifySection>
      <CustomeSlider data={scifyData} title={title} />
    </ScifySection>
  );
};
export default SciFy;
