import React from "react";
import HeroSection from "../components/heroSection/heroSection";
import Introduction from "../components/introduction/introduction";
import Footer from "../components/footer/footer";
import Profiles from "../components/profiles/profiles";
import useModal from "../utils/useModal";

const Home = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="index-page">
      <HeroSection show={toggle} />
      <Introduction />
      {isShowing && <Profiles hide={toggle} />}
      <Footer />
    </div>
  );
};

export default Home;
