import Selector from "../Select/Select";
import { SpeciesFiltersNames } from "@/constants/filters";

type SpeciesFiltersProps = {
  onChange: (key: string, value: string) => void;
};

const SpeciesFilters = ({ onChange }: SpeciesFiltersProps) => {
  return (
    <div>
      <Selector
        items={SpeciesFiltersNames}
        onChange={onChange}
        filterKey="species"
      />
    </div>
  );
};

export default SpeciesFilters;
