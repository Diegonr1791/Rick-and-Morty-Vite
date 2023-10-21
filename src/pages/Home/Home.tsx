import CardCharacter from "@/components/Card/CardCharacter";

const Home = () => {
  return (
    <div className="flex p-4">
      <CardCharacter
        name="morty"
        id={1}
        image="https://images-ext-1.discordapp.net/external/SQeLuvgmpP6Ivbkk4DMhwoG_HSCnMC57_MwfiGpmEec/https/rickandmortyapi.com/api/character/avatar/1.jpeg"
      />
    </div>
  );
};

export default Home;
