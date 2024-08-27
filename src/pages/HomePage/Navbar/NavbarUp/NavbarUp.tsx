import jeep from "./jeep.png";
import "./NavbarUp.css"; // Import the CSS file

const NavbarUp = () => {
  return (
    <>
      <header>
        <a href="#" className="logo">
          <img src={jeep} alt="CarRent CO." />
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Booking">Booking</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="header-btn">
          <a href="#" className="sign-up">
            Sign Up
          </a>
          <a href="#" className="sign-in">
            Sign In
          </a>
        </div>
      </header>
    </>
  );
};
export default NavbarUp;
