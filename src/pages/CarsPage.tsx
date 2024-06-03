import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CarsComponent from "../components/Cars/CarsComponent";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import { ICarPaginatedModel } from "../models/ICarPaginatedModel";
import { authService, carService } from "../services/api.service";

const CarsPage = () => {
  const navigate = useNavigate();

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
    const getCarsData = async () => {
      try {
        const res = await carService.getCars(query.get("page") || "1");
        if (res) {
          setCarsPaginatedObject(res);
        }
      } catch (e) {
        const axiosError = e as AxiosError;
        if (axiosError && axiosError?.response?.status === 401) {
          try {
            await authService.refresh();
          } catch (e) {
            return navigate("/auth");
          }
          const res = await carService.getCars(query.get("page") || "1");
          if (res) {
            setCarsPaginatedObject(res);
          }
        }
      }
    };

    getCarsData();
  }, [query, navigate]);

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
