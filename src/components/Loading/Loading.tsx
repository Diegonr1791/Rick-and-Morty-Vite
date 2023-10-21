import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="flex gap-4">
      <Spinner color="secondary" size="sm" />
    </div>
  );
};

export default Loading;
