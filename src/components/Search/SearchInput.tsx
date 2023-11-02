import { SearchIcon } from "@/assets/SearchIcon";
import { Input } from "@nextui-org/react";
type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <Input
      name="name"
      classNames={{
        base: "max-w-full sm:max-w-[20rem] h-10",
        mainWrapper: "h-full",
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-white",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        inputWrapper: [
          "shadow-xl",
          "bg-white",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder="Search"
      size="sm"
      startContent={<SearchIcon size={18} />}
      onChange={onChange}
    />
  );
};

export default SearchInput;
