import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../hooks/DarkMode/DarkModeContext";
import { UserContext } from "../../hooks/UserHooks/userContextApp";
import SunIcon from "../Navbar/ImagesNavBar/Sunny.png";
import MoonIcon from "../Navbar/ImagesNavBar/Moon.png";
import SearchIcon from "../Navbar/ImagesNavBar/SearchIcon.png";
import Jobs from "../Navbar//ImagesNavBar/Jobs.png";
import "../Navbar/Navbar.css";



function NavBar() {

  const { isSun, handleIconClick } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const { userInformation } = useContext(UserContext);
  console.log(userInformation);
  const handleSearchIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header>
      <nav className="container_nav" src={isSun ? MoonIcon : SunIcon}>
        <div>
          <img className="logo" src={Jobs} alt="jobs" />
        </div>
        <ul className="link_list">
          {userInformation?.isAdmin && (
            <>
              <li>
                <Link className="link" to={"/"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to={"/favCards"}>
                  Favorit Cards
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
                <Link className="link" to={"/Bla"}>
                  bla
                </Link>
              </li>
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
          {!userInformation?.isAdmin && !userInformation?.isBusiness && userInformation  && (
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
          <li className="left">
            <div className="searchBar">
              <input
                className={isExpanded ? "expanded searchInput" : "searchInput"}
                type="text"
                placeholder="Search Your Card..."
              />
              <img
                src={SearchIcon}
                alt="Search Icon"
                onClick={handleSearchIconClick}
                className={
                  isExpanded ? "searchIcon searchIconMoved" : "searchIcon"
                }
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
          <li>
            <Link className="link" to={"/register"}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
