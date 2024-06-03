import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { IPaginatedPageModel } from "../../models/IPaginatedPageModel";

interface IProps {
  next: IPaginatedPageModel | null;
  prev: IPaginatedPageModel | null;
}

const PaginationComponent: FC<IProps> = ({ prev, next }) => {
  const [query, setQuery] = useSearchParams({ page: "1" });

  const changePage = (action: string) => {
    switch (action) {
      case "prev":
        setQuery({ ...query, ...prev });
        break;
      case "next":
        setQuery({ ...query, ...next });
        break;
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          changePage("prev");
        }}
        disabled={!prev}
      >
        prev
      </button>
      <button
        onClick={() => {
          changePage("next");
        }}
        disabled={!next}
      >
        next
      </button>
    </div>
  );
};

export default PaginationComponent;
