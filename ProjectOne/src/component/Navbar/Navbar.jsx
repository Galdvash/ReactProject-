import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../hooks/DarkMode/DarkModeContext";
import { UserContext } from "../../hooks/UserHooks/userContextApp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuIcon from "@mui/icons-material/Menu";
import SunIcon from "../Navbar/ImagesNavBar/Sunny.png";
import MoonIcon from "../Navbar/ImagesNavBar/Moon.png";
import SearchIcon from "../Navbar/ImagesNavBar/SearchIcon.png";
import Jobs from "../Navbar/ImagesNavBar/Jobs.png";
import "../Navbar/Navbar.css";

const NavBar = ({ onSearch }) => {
  const { isSun, handleIconClick } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
  const { userInformation, setUserInformation } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogout = () => {
    // Confirm logout with the user
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setUserInformation(null);
      localStorage.removeItem("userInformation");
      localStorage.removeItem("token");
      navigate("/");
      toast.success('Logged out successfully'); // Set toast message
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the search function passed as a prop
  };

  return (
    <header className="header">
      <nav className={`container_nav ${isSun ? "dark" : "light"}`}>
        <img className="logo" src={Jobs} alt="jobs" />

        <div className="hamburger" onClick={toggleMenu}>
          <MenuIcon className="menuIcon" style={{ width: '33px', height: '35px' }} />
        </div>

        <ul className={`link_list ${isMenuOpen ? "open" : ""}`}>
          {userInformation?.isAdmin && (
            <>
              <li>
                <Link className="link" to={"/"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to={"/FindTheOne"}>
                  FindTheOne
                </Link>
              </li>
              <li>
                <Link className="link" to={"/myCards"}>
                  My Cards
                </Link>
              </li>
              <li>
                <Link className="link" to={"/sandBox"}>
                  SandBox
                </Link>
              </li>
            </>
          )}
          {userInformation?.isBusiness && (
            <>
              <li>
                <Link className="link" to={"/"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to={"/FindTheOne"}>
                  FindTheOne
                </Link>
              </li>
              <li>
                <Link className="link" to={"/myCards"}>
                  My Cards
                </Link>
              </li>
            </>
          )}
          {!userInformation?.isAdmin && !userInformation?.isBusiness && userInformation && (
            <>
              <li>
                <Link className="link" to={"/"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to={"/FindTheOne"}>
                  FindTheOne
                </Link>
              </li>
            </>
          )}
          {!userInformation && !userInformation?.isAdmin && !userInformation?.isBusiness && (
            <>
            <li>
              <Link className="link" to={"/"}>
                About
              </Link>
            </li>
           </> 
          )}
           <li>
              {userInformation ? (
                <button className="link" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link className="link" to={"/register"}>
                  Register
                </Link>
              )}
            </li>

          <div className="moveRight">
            <li>
              <div className="searchBar">
                <input
                  className={isExpanded ? "expanded searchInput" : "searchInput"}
                  type="text"
                  placeholder="Search Your Card..."
                  value={searchQuery}
                  onChange={handleSearchInputChange} // Handle search input change
                />
                <img
                  src={SearchIcon}
                  alt="Search Icon"
                  onClick={handleSearchIconClick}
                  className={isExpanded ? "searchIcon searchIconMoved" : "searchIcon"}
                />
              </div>
            </li>
            <li>
              <img
                src={isSun ? SunIcon : MoonIcon}
                alt="Sun Icon"
                onClick={handleIconClick}
                className="moon_sun_icon"
              />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
