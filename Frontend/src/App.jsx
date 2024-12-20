import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Doctors from "./components/Doctors";
import Features from "./components/Features";
import Experts from "./components/Experts";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User after Login
import UserNav from "./UserAfterLogin/UserNav";
import Assessment from "./UserAfterLogin/Assessment";
import HairSpecialists from "./UserAfterLogin/HairSpecialists";
function App() {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/afterLogin" element={<UserAfter_Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Review />
      <Doctors />
      <Features />
      <Experts />
      <Work />
      <Testimonial />
      <Footer />
    </>
  );
}

function LoginPage() {
  return <Login />;
}
function RegisterPage() {
  return <Register />;
}

//>>>>>>>>>> User After Login  <<<<<<<<<<<<<<<<//
function UserAfter_Login() {
  return (
    <>
      <UserNav />
      <Assessment />
      <HairSpecialists />
    </>
  );
}
export default App;
