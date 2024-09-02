import "./Navbar.css"; // Import the CSS file

import HomeImage from "./Car Website – 1@2x.png";
import { Layout } from "antd";
import Sidebar from "../../../PHForm/layout/Sidebar";
import NavbarUp from "./NavbarUp/NavbarUp";

import SuduCarListPage from "../../Car Listing Page/SuduCarListPage/SuduCarListPage";
import { Link } from "react-router-dom";

// Dummy data for featured cars

// Dummy data for customer reviews
const customerReviews = [
  {
    id: 1,
    name: "Salman F Rahman",
    review: "Excellent service and great selection of cars!",
    rating: 5,
  },
  {
    id: 2,
    name: "Harun Uncle",
    review: "Affordable prices and friendly staff. Highly recommended!",
    rating: 4,
  },
  {
    id: 3,
    name: "Hasina",
    review: "The booking process was smooth and hassle-free.",
    rating: 5,
  },
  {
    id: 4,
    name: "Baker Vhai",
    review: "The booking process was smooth and hassle-free.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tourist",
    review: "The booking process was smooth and hassle-free.",
    rating: 5,
  },
];

const Navbar = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />

      <NavbarUp />
      <div>
        <div className="home" id="home">
          <div className="home-content">
            <div className="text">
              <h1>
                <span>Looking</span> to rent a car
              </h1>
              <p>Find the perfect car for your journey</p>
              <Link to={`/cars`}>
                <button className="book-now-btn">Book Now</button>
              </Link>
            </div>
            <div className="image">
              <img src={HomeImage} alt="Car Rental" />
            </div>
          </div>
        </div>

        {/* Featured Cars Grid */}
        {/* <div className="featured-cars">
          <h2>Featured Cars</h2>
          <div className="cars-grid">
            {featuredCars.map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <p className="price">{car.price}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="highlights">
          <SuduCarListPage />
        </div>

        {/* Highlight Unique Selling Points */}
        <div className="highlights2">
          <div className="highlight-card">
            <h3>Best Prices</h3>
            <p>We offer the most competitive prices in the market.</p>
          </div>
          <div className="highlight-card">
            <h3>Wide Selection</h3>
            <p>Choose from a variety of cars to suit your needs.</p>
          </div>
          <div className="highlight-card">
            <h3>24/7 Support</h3>
            <p>Our team is available around the clock to assist you.</p>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="customer-reviews">
          <h2 className="depink">What Our Customers Say</h2>
          <div className="reviews-grid">
            {customerReviews.map((review) => (
              <div key={review.id} className="review-card">
                <h3>{review.name}</h3>
                <p>"{review.review}"</p>
                <p className="rating">Rating: {review.rating} stars</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <footer>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Navbar;
