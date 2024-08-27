import { useGetAllCarsQuery } from "../../redux/api/CarManagemntApi/carmanagementApi";
import "./CarListingPage.css";
const CarListingPage = () => {
  const { data: carsData } = useGetAllCarsQuery(undefined);

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

  console.log("All car data");
  console.log(tableData);

  return (
    <p className="upore">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      saepe, porro alias placeat voluptatibus totam, quam nemo unde a blanditiis
      eaque magnam expedita eligendi autem magni excepturi voluptate aspernatur?
      Tempora!
    </p>
  );
};
export default CarListingPage;
