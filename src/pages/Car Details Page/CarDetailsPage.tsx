import React from "react";
import { useLocation } from "react-router-dom";
import "./CarDetailsPage.css";

const CarDetailsPage = () => {
  const location = useLocation();
  const car = location.state?.car;
  console.log(car);

  if (!car) {
    return <div>No car details available</div>;
  }

  return (
    <div className="car-details-page">
      <h2>{car.name}</h2>
      <div className="car-details-container">
        <img
          src="https://via.placeholder.com/400" // Replace with actual image source if available
          alt={car.name}
        />
        <div className="car-info">
          <p>
            <strong>Description:</strong> {car.description}
          </p>
          <p>
            <strong>Color:</strong> {car.color}
          </p>
          <p>
            <strong>Electric:</strong> {car.isElectric ? "Yes" : "No"}
          </p>
          <p>
            <strong>Features:</strong> {car.features.join(", ")}
          </p>
          <p>
            <strong>Price Per Hour:</strong> ${car.pricePerHour}
          </p>
          <p>
            <strong>Status:</strong> {car.status}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(car.createdAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(car.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <button className="book-now-btn">Book Now</button>
    </div>
  );
};

export default CarDetailsPage;
