import "./Home.css";
import { Hero, Products, MostPopular, Services } from "../../Sections/index";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <MostPopular />
      <Services />
    </>
  );
};

export default Home;
