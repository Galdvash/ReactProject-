import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/Navbar";
import About from "./component/About/About"
import FindTheOne from "./component/FindTheOne/FindTheOne"
import FavoritCards from "./component/FavoritCards/FavoritCards";
import Register from "./component/Register/Register";
import Cards from "./component/Cards/Cards";
import SandBox from "./component/SandBox/SandBox";
import { ThemeProvider } from "./hooks/DarkMode/DarkModeContext";
import { UserProvider } from "./hooks/UserHooks/userContextApp";
import "./hooks/DarkMode/DarkMode.css"
// import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/FindTheOne" element={<FindTheOne />} />
            <Route path="/favCards" element={<FavoritCards />} />
            <Route path="/myCards" element={<Cards />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sandBox" element={<SandBox />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

// import Login from "./component/Login/Login";

/* <Route path="/login" element={<Login />} /> */
