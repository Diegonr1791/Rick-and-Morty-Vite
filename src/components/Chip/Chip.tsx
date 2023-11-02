import CheckIcon from "@heroicons/react/24/outline/CheckIcon";

type ChipProps = {
  filterKey: string;
  name: string;
  color: string;
  onClick: (key: string, value: string) => void;
  isActive?: boolean;
};
const Chip = ({ filterKey, name, onClick, isActive }: ChipProps) => {
  return (
    <div className="flex  bg-black rounded-3xl  items-center justify-center px-[5px] py-[3px]  hover:bg-gray-700 group">
      <div
        className={`flex w-full h-full  bg-white rounded-3xl  items-center justify-center p-1 px-3 group-hover:bg-black`}
      >
        <button
          className="flex text-md text-black group-hover:text-white flex-row"
          name={name}
          onClick={() => onClick(filterKey, name)}
        >
          {name}
          {isActive && <CheckIcon className="w-5 h-5 ml-2" />}
        </button>
      </div>
    </div>
  );
};

export default Chip;
