import './App.css';
import AppBar from './Components/appbar/Appbar';
import CustomerFeedback from './Components/customerExperience/CustomerFeedback';
import CustomerAvatar from './Components/cutomerReview/CustomerAvatar';
import Social from './Components/social/Social';

function App() {
  return (
    <div>
      <AppBar/>
      <CustomerFeedback/>
      <CustomerAvatar/>
      <Social/>
    </div>
  );
}

export default App;
