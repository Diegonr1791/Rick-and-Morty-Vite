type BadgeProps = {
  item: string | number | null;
  bgColor: string;
  color?: string;
};
const Badge = ({ item, bgColor, color }: BadgeProps) => {
  if (!item) return null;
  return (
    <div
      className={`flex w-[18px] h-[18px] place-content-center rounded-full ${bgColor}`}
    >
      <div className="flex w-full h-full place-content-center items-center justify-center ">
        <p className={`${color} text-xs`}>{item}</p>
      </div>
    </div>
  );
};

export default Badge;
