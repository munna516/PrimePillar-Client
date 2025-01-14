import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import AboutBuilding from "../../Components/AboutBuilding/AboutBuilding";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PrimePillar | Building Management Website</title>
      </Helmet>
      <div className="space-y-20">
        <Banner></Banner>
        <AboutBuilding></AboutBuilding>
      </div>
    </>
  );
};

export default Home;
