import React from "react";
import Hero from "./components/widgets/Hero";
import CoreTrack from "./components/widgets/CoreTrack";
import SpecializedTrack from "./components/widgets/SpecializedTrack";

const Home = () => {
  return (
    <main>
      {/* Hero section start here */}
      <Hero />
      {/* Hero section end  here */}
      {/* CoreTrack starts here */}
      <CoreTrack />
      {/* CoreTrack ends here */}
      {/* SpecializedTrack starts here */}
      <SpecializedTrack />
      {/* SpecializedTrack ends here */}
    </main>
  );
};

export default Home;
