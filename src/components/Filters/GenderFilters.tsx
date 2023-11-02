import { GenderFiltersNames } from "@/constants/filters";
import Chip from "@/components/Chip/Chip";
import { Filters } from "../FilterBar/interfaces";

type GenderFiltersProps = {
  filters: Filters;
  onChange: (key: string, value: string) => void;
};

const GenderFilters = ({ filters, onChange }: GenderFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {GenderFiltersNames.map((filter, index) => {
        const isActive = Object.values(filters).includes(filter.name);
        return (
          <Chip
            key={index}
            name={filter.name}
            filterKey="gender"
            color={filter.color}
            onClick={onChange}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default GenderFilters;
