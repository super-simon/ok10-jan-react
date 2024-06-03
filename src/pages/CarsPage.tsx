import { useEffect, useState } from "react";
import CarsComponent from "../components/Cars/CarsComponent";
import { ICarPaginatedModel } from "../models/ICarPaginatedModel";
import { carService } from "../services/api.service";

const CarsPage = () => {
  const [carsPaginatedObject, setCarsPaginatedObject] =
    useState<ICarPaginatedModel>({
      items: [],
      next: null,
      prev: null,
      total_items: 0,
      total_pages: 0,
    });
  useEffect(() => {
    carService.getCars().then((val) => {
      if (val) {
        setCarsPaginatedObject(val);
      }
    });
  }, []);
  return <CarsComponent carsPaginatedObject={carsPaginatedObject} />;
};

export default CarsPage;
