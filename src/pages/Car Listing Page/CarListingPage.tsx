import { useGetAllCarsQuery } from "../../redux/api/CarManagemntApi/carmanagementApi";
import { useNavigate } from "react-router-dom";
import "./CarListingPage.css";

const CarListingPage = () => {
  const { data: carsData } = useGetAllCarsQuery(undefined);
  const navigate = useNavigate();

  const tableData = carsData?.data?.map(
    ({
      _id,
      name,
      description,
      color,
      isElectric,
      features,
      pricePerHour,
      status,
      isDeleted,
      createdAt,
      updatedAt,
    }) => ({
      key: _id,
      name,
      description,
      color,
      isElectric,
      features,
      pricePerHour,
      status,
      isDeleted,
      createdAt,
      updatedAt,
    })
  );

  const handleViewMore = (car: {
    key: any;
    name?: string;
    description?: string;
    color?: string;
    isElectric?: boolean;
    features?: string[];
    pricePerHour?: number;
    status?: string;
    isDeleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }) => {
    navigate(`/car-details/${car.key}`, { state: { car } });
  };

  return (
    <div className="car-listing-page">
      <h2>Available Cars</h2>
      <div className="cars-grid">
        {tableData?.map((car) => (
          <div key={car.key} className="car-card">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image source if available
              alt={car.name}
            />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <p className="price">${car.pricePerHour}/hour</p>
            <button
              className="book-now-btn"
              onClick={() => handleViewMore(car)}
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListingPage;
