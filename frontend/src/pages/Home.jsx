import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import TopCities from "../components/TopCities";
import TrendingBusinesses from "../components/TrendingBusinesses";
import FeaturedServices from "../components/FeaturedServices";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import PopularSearches from "../components/PopularSearches";
import PromoVideo from "../components/PromoVideo";
import Reviews from "../components/Reviews";
import BusinessCTA from "../components/BusinessCTA";
import Stats from "../components/Stats";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <SearchBar /> */}
      <Categories />
      <TopCities />
      <TrendingBusinesses />
      <FeaturedServices />
      <HowItWorks />
      <WhyChoose />
      <PopularSearches />
      <PromoVideo />
      {/* <Reviews /> */}
      <BusinessCTA />
      <Stats />
      <AppDownload />
      <Footer />
    </>
  );
};

export default Home;
