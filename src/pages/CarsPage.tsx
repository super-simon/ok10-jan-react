import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CarsComponent from "../components/Cars/CarsComponent";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import { ICarPaginatedModel } from "../models/ICarPaginatedModel";
import { carService } from "../services/api.service";

const CarsPage = () => {
  const [query] = useSearchParams({ page: "1" });

  const [carsPaginatedObject, setCarsPaginatedObject] =
    useState<ICarPaginatedModel>({
      items: [],
      next: null,
      prev: null,
      total_items: 0,
      total_pages: 0,
    });

  useEffect(() => {
    carService.getCars(query.get("page") || "1").then((val) => {
      if (val) {
        setCarsPaginatedObject(val);
      }
    });
  }, [query]);

  return (
    <div>
      <CarsComponent cars={carsPaginatedObject.items} />
      <PaginationComponent
        prev={carsPaginatedObject.prev}
        next={carsPaginatedObject.next}
      />
    </div>
  );
};

export default CarsPage;
