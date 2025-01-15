import React from "react";
import Formwithformik from "./Components/Formwithformik";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Services from "./Components/pages/Services";
import Login from "./Components/pages/Login";
import { nav_items } from "./Components/pages/navitems";
import Registration from "./Components/pages/Registration";
import Dashbord from "./Components/pages/Dashbord";
// import { AuthProvider } from "./content/AuthProvider";
import { AuthProvider } from "./content/Auth2";
import Userinfo from "./Components/Admin/Userinfo";
import Contactinfo from "./Components/Admin/Contactinfo";
import Servicesinfo from "./Components/Admin/Servicesinfo";
import Edit from "./Components/Admin/Modification/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar navbarItems={nav_items}></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About></About>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/services" element={<Services></Services>} />
            <Route path="/login" element={<Login></Login>} />
            <Route
              path="/registration"
              element={<Registration></Registration>}
            />
            <Route path="/dashboard/*" element={<Dashbord />}>
              <Route path="users" element={<Userinfo />} />
              <Route path="contact" element={<Contactinfo />} />
              <Route path="service" element={<Servicesinfo />} />
              <Route path="edit/:id" element={<Edit />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

      {/* <Formwithformik /> */}
    </>
  );
}

export default App;
