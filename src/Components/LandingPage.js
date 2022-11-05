import React from "react";
import Appbar from "./appbar/Appbar";
import Cards from "./cards/Cards";
import CustomerFeedback from "./customerExperience/CustomerFeedback";
import CustomerAvatar from "./cutomerReview/CustomerAvatar";
import Footer from "./Footer";
import Social from "./social/Social";

function LandigPage() {
  return (
    <React.Fragment>
      <Appbar />
      <CustomerFeedback />
      <CustomerAvatar />
      <Social />
      <Cards />
      <Footer />
     
    </React.Fragment>
  );
}

export default LandigPage;
