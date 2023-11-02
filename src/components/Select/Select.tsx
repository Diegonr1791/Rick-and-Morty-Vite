import { Select, SelectItem } from "@nextui-org/react";
type SelectorProps = {
  items: Array<{ label: string; value: string }>;
  onChange: (key: string, value: string) => void;
  filterKey: string;
};
const Selector = ({ items, onChange, filterKey }: SelectorProps) => {
  return (
    <div className="flex w-full bg-black gap-4 rounded-lg p-[3px]">
      <Select label="Select" className="w-full" size="sm">
        {items.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            onClick={() => onChange(filterKey, item.value)}
            className="font-PlaypenSerif text-xs sm:text-md"
          >
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default Selector;
