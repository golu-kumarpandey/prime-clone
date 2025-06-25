import styled from "styled-components";
import CustomeSlider from "../CustomeSlider";
import data from "../../staticData/data.json";

const HorrorSection = styled.section`
  margin-bottom: 10px;
`;

const Horror = () => {
  const horrorData = data.movies.horror;
  const title = "Horror";

  return (
    <HorrorSection>
      <CustomeSlider data={horrorData} title={title} />
    </HorrorSection>
  );
};

export default Horror;
