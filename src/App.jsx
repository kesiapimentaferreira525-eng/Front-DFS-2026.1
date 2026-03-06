
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { LandingPage } from "./pages/LandingPage"
import { Home } from "./pages/Home"
import { LoginPage } from "./pages/LoginPage"
import { useAuth } from "./context/AuthContext"
import { isTokenValid } from "./services/ApiService"

<<<<<<< Updated upstream
const AuthRoute = ({component: Component}) => {
=======
import OfferDetails from "./components/offersdatails/OffersDatails";
import { UserForm } from "./components/UserForm";
import { useAuth } from "./context/AuthContext";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { LoginPage } from "./pages/LoginPage";
import OffersPage from "./pages/offers/OffersPage";
import Register from "./pages/register/Register";
import OfferForm from "./components/OfferForm";
import UserDashboard from "./pages/UserDashboard";
import { isTokenValid } from "./services/ApiService";

const AuthRoute = ({ component: Component }) => {
>>>>>>> Stashed changes
  const { token } = useAuth();

  return isTokenValid(token) ? <Component /> : <Navigate to="/login" />
}

import OffersPage from "./components/offers/OffersPage";
import OfferDetails from "./components/offersdatails/OffersDatails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/users" element={<Home> <UserList /> </Home>}/>
        <Route path="/save-user" element={< AuthRoute component={UserForm} />}/>
        <Route path="/user/:id" element={< AuthRoute component={UserForm} />}/>
        <Route path="/offers" element={<OffersPage />} />
<<<<<<< Updated upstream
        <Route path="/offers/:id" element={<OfferDetails />} />
    
=======
        <Route path="/offers/create" element={<AuthRoute component={OfferForm} />} />
        <Route path="/offers/:id/edit" element={<AuthRoute component={OfferForm} />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers/:id" element={<OfferDetails />} />
        <Route path="/dashboard" element={<AuthRoute component={UserDashboard} />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;
