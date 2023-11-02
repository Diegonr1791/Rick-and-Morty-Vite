import { StatusFiltersNames } from "@/constants/filters";
import Chip from "@/components/Chip/Chip";
import { Filters } from "../FilterBar/interfaces";

type StatusFiltersProps = {
  filters: Filters;
  onChange: (key: string, value: string) => void;
};

const StatusFilters = ({ filters, onChange }: StatusFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {StatusFiltersNames.map((filter, index) => {
        const isActive = Object.values(filters).includes(filter.name);
        return (
          <Chip
            key={index}
            name={filter.name}
            filterKey="status"
            color={filter.color}
            onClick={onChange}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default StatusFilters;
