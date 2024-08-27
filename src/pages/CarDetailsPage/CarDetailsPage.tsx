import "./CarDetailsPage.css"; // Import the CSS file for styling
import cb from "./car1.jpg";
const CarDetailsPage = () => {
  const car = {
    name: "Toyota Camry",
    description:
      "A comfortable and fuel-efficient sedan perfect for city and highway driving.",
    price: 50, // Price per day in dollars
    availability: "Available",
    reviews: [
      {
        id: 1,
        name: "Alice",
        comment: "Great car, very comfortable and clean!",
      },
      { id: 2, name: "Bob", comment: "Fuel efficient and smooth ride." },
    ],
    images: [cb],
  };

  return (
    <div className="car-details-page">
      <h1 className="car-title">{car.name}</h1>

      {/* Car Images with Zoom Functionality */}
      <div className="car-images">
        {car.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${car.name} ${index + 1}`}
            className="car-image"
          />
        ))}
      </div>

      {/* Car Details */}
      <div className="car-info">
        <p className="car-description">{car.description}</p>
        <p className="car-price">
          <strong>Price:</strong> ${car.price}/day
        </p>
        <p className="car-availability">
          <strong>Availability:</strong> {car.availability}
        </p>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {car.reviews.map((review) => (
          <div key={review.id} className="review-item">
            <p>
              <strong>{review.name}:</strong> {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="additional-features">
        <h2>Choose Additional Features</h2>
        <label>
          <input type="checkbox" />
          Insurance
        </label>
        <label>
          <input type="checkbox" />
          GPS
        </label>
        <label>
          <input type="checkbox" />
          Child Seat
        </label>
      </div>

      {/* Book Now Button */}
      <button className="book-now-button">Book Now</button>
    </div>
  );
};

export default CarDetailsPage;
