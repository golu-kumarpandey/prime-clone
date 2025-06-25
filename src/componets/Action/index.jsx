import styled from "styled-components";
import data from "../../staticData/data.json";
import CustomeSlider from "../CustomeSlider";
const ActionSection = styled.section`
  margin-bottom: 10px;
`;

const Action = () => {
  const actionData = data.movies.action;
  const title = "Action";

  return (
    <ActionSection>
      <CustomeSlider data={actionData} title={title} />
    </ActionSection>
  );
};
export default Action;
