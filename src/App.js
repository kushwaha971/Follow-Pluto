import React from 'react';
import './App.css';
import AppBar from './Components/appbar/Appbar';
import Cards from './Components/cards/Cards';
import CustomerFeedback from './Components/customerExperience/CustomerFeedback';
import CustomerAvatar from './Components/cutomerReview/CustomerAvatar';
import Footer from './Components/Footer';
import Social from './Components/social/Social';

function App() {
  return (
    <React.Fragment>
      <AppBar/>
      <CustomerFeedback/>
      <CustomerAvatar/>
      <Social/>
      <Cards/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
