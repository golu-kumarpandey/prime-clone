import HomeSection from "./style";
import Header from "../../componets/Header";
import SimpaleSlider from "../../componets/SimpleSlider";
import data from "../../staticData/data.json";
import Category from "../../componets/Category";
import Fantasy from "../../componets/Fantasy";
import Horror from "../../componets/Horror";
import SciFy from "../../componets/SciFy";
import Action from "../../componets/Action";
import Biography from "../../componets/Biography";
import Romantic from "../../componets/Romantic";
import Footer from "../../componets/Footer";
import Navbar from "../../componets/NavBar";
const Home = () => {
  return (
    <HomeSection>
      <Header />
      <div className="mobile-nav">
        <Navbar />
      </div>
      <SimpaleSlider data={data.sliderImage} />
      <Category />
      <Fantasy />
      <Horror />
      <SciFy />
      <Action />
      <Biography />
      <Romantic />
      <Footer />
    </HomeSection>
  );
};

export default Home;
