import { Card, CardFooter, Image } from "@nextui-org/react";

type CardCharacterProps = {
  id: number;
  name: string;
  image: string;
};

export const CardCharacter = ({ id, name, image }: CardCharacterProps) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
      onClick={() => console.log(id)}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={image}
        width={300}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
        <p className="text-tiny text-white/80">{name}</p>
      </CardFooter>
    </Card>
  );
};

export default CardCharacter;
