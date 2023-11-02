import { Dispatch, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { Filters } from "./interfaces";
import StatusFilters from "../Filters/StatusFilters";
import SpeciesFilters from "../Filters/SpeciesFilters";
import { DefaultFilters } from "@/constants/filters";
import Badge from "../Badge/Badge";
import GenderFilters from "../Filters/GenderFilters";
type FilterBarProps = {
  filters: Filters;
  setFilters: Dispatch<React.SetStateAction<Filters>>;
  isLoading?: boolean;
};
const FilterBar = ({ filters, setFilters }: FilterBarProps) => {
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["0"]));

  const onFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };
  const handleClearFilters = () => {
    setSelectedKeys(new Set(["0"]));
    setFilters(DefaultFilters);
  };

  const filtersActiveCount = Object.values(filters).filter(
    (item) => item !== ""
  ).length;

  return (
    <div className="w-full min-w-[250px]  py-3 md:py-0">
      <div className="relative pt-4">
        <div className="absolute w-[100px]  inset-x-20  sm:inset-x-56 md:inset-x-14 lg:inset-x-16 top-0 bg-black p-[3px] rounded-md">
          <div className=" flex w-full flex-row bg-white rounded-md justify-center p-1">
            <p className="px-2 text-xs md:text-sx ">Filters</p>
            <Badge
              item={filtersActiveCount > 0 ? filtersActiveCount : null}
              bgColor="bg-black"
              color="text-white"
            />
          </div>
        </div>
        <div className="w-full md:max-w-[240px] bg-black p-[3px]  rounded-md">
          <div className="w-full bg-white py-4 rounded-lg">
            <Accordion
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              itemClasses={{
                title: "text-xs sm:text-md md:text-[15px]",
                content: "text-xs sm:text-md ",
              }}
            >
              <AccordionItem key="1" aria-label="status" title="Status">
                <StatusFilters onChange={onFilterChange} filters={filters} />
              </AccordionItem>
              <AccordionItem key="2" aria-label="species" title="Species">
                <SpeciesFilters onChange={onFilterChange} />
              </AccordionItem>
              <AccordionItem key="3" aria-label="gender" title="Gender">
                <GenderFilters onChange={onFilterChange} filters={filters} />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="absolute w-[100px]  inset-x-20  sm:inset-x-56 md:inset-x-14 lg:inset-x-16 bottom-[-15px] bg-black p-[3px] rounded-md">
          <div className="flex w-full bg-white rounded-md justify-center p-1 hover:bg-purple-600 cursor-pointer hover:text-white">
            <button
              className="px-2 text-xs md:text-sx"
              onClick={handleClearFilters}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
