import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import AboutBuilding from "../../Components/AboutBuilding/AboutBuilding";
import Coupons from "../../Components/Coupons/Coupons";
import Space from "../../Components/Space/Space";
import LocationDetails from "../../Components/Location Details/LocationDetails";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import FeaturedApartment from "../../Components/Featured Apartment/FeaturedApartment";
import Blogs from "../../Components/Blogs/Blogs";
import Reviews from "../../Components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PrimePillar | Building Management Website</title>
      </Helmet>
      <div className="space-y-20">
        <Banner></Banner>
        <FeaturedApartment></FeaturedApartment>
        <Coupons></Coupons>
        <AboutBuilding></AboutBuilding>
        <Blogs></Blogs>
        <Reviews></Reviews>
        <LocationDetails></LocationDetails>
        <NewsLetter></NewsLetter>
      </div>
    </>
  );
};

export default Home;
