import CustomeSlider from "../CustomeSlider";
import data from "../../staticData/data.json";
import { FantasySection } from "./style";

const Fantasy = () => {
  const fantasyData = data.movies.fantasy;
  const title = "Fantasy";

  return (
    <FantasySection>
      <CustomeSlider data={fantasyData} title={title} />
    </FantasySection>
  );
};
export default Fantasy;
