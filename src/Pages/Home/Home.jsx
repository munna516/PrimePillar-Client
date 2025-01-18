import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import AboutBuilding from "../../Components/AboutBuilding/AboutBuilding";
import Coupons from "../../Components/Coupons/Coupons";
import Space from "../../Components/Space/Space";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PrimePillar | Building Management Website</title>
      </Helmet>
      <div className="space-y-20">
        <Banner></Banner>
        <Coupons></Coupons>
        <AboutBuilding></AboutBuilding>
      </div>
      <Space></Space>
    </>
  );
};

export default Home;
