import "./Home.css";
import { Hero, Products, MostPopular, Services } from "../../Sections/index";
import { UpButton } from "../../Components";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <MostPopular />
      <Services />
      <UpButton />
    </>
  );
};

export default Home;
