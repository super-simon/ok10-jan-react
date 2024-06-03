import { FC } from "react";
import { ICarWithAuthModel } from "../../models/ICarWithAuthModel";
import CarComponent from "./CarComponent";
import "./CarsComponent.css";

interface IProps {
  cars: ICarWithAuthModel[];
}

const CarsComponent: FC<IProps> = ({ cars }) => {
  return (
    <div>
      <ul className="carsList">
        {cars.map((car) => (
          <li key={car.id} className="carsItem">
            <CarComponent car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsComponent;
