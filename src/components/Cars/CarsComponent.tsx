import { FC } from "react";
import { ICarPaginatedModel } from "../../models/ICarPaginatedModel";
import CarComponent from "./CarComponent";
import "./CarsComponent.css";

interface IProps {
  carsPaginatedObject: ICarPaginatedModel;
}

const CarsComponent: FC<IProps> = ({ carsPaginatedObject }) => {
  return (
    <div>
      <ul className="carsList">
        {carsPaginatedObject?.items.map((car) => (
          <li key={car.id} className="carsItem">
            <CarComponent car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsComponent;
