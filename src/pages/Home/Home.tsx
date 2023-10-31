import Ship from "@/assets/ship2.png";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="flex h-full flex-col gap-6">
        <div className="flex flex-wrap sm:flex-row sm:flex-nowrap  sm:pt-20 w-full   ">
          <div className="flex flex-row  sm:pt-20 sm:w-1/2 gap-6  ">
            <div className=" bg-red-500 w-1  h-20 sm:h-32" />
            <div>
              <h1 className=" text-4xl sm:text-8xl font-bold text-white">
                Welcome
              </h1>
              <p className="text-2xl text-white">to Rick and Morty page</p>
              <div className=" flex pt-9 justify-start ">
                <Button className=" text-white bg-purple-950 hover:text-purple-950 hover:bg-white transition-all hover:animate-bounce">
                  <Link to="/characters">Get started</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:items-center">
            <img src={Ship} alt="" />
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
};

export default Home;
