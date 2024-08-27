import HeroSectionImage from "./Car Website – 1@2x.png";

// Dummy data for featured cars
const featuredCars = [
  {
    id: 1,
    name: "Toyota Camry",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Comfortable and spacious",
    price: "$50/day",
  },
  {
    id: 2,
    name: "BMW 3 Series",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Luxury and performance",
    price: "$100/day",
  },
  {
    id: 3,
    name: "Ford Mustang",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Iconic and powerful",
    price: "$120/day",
  },
];

// Dummy data for customer reviews
const customerReviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Excellent service and great selection of cars!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Affordable prices and friendly staff. Highly recommended!",
    rating: 4,
  },
  {
    id: 3,
    name: "Mike Johnson",
    review: "The booking process was smooth and hassle-free.",
    rating: 5,
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="home" id="home">
        <div className="home-content">
          <div className="text">
            <h1>
              <span>Looking</span> to rent a car
            </h1>
            <p>Find the perfect car for your journey</p>
          </div>
          <div className="image">
            <img src={HeroSectionImage} alt="Car Rental" />
          </div>
        </div>
      </div>

      {/* Highlight Unique Selling Points */}
      <div className="highlights">
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

      {/* Featured Cars Grid */}
      <div className="featured-cars">
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
      </div>

      {/* Customer Reviews Section */}
      <div className="customer-reviews">
        <h2>What Our Customers Say</h2>
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
  );
};

export default Navbar;
