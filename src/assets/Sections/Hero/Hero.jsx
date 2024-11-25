import "./Hero.css";
import HeroImages from '../../image/hero.png'
// hero.png
import {Button} from "../../Components/index";

const Hero = () => {
  return (
    <>
      <section id="hero" className="d-flex justify-content-between">
        <div className="hero-content">
          <h1>Stay Warm, Stay Stylish</h1>
          <p>
            Discover our premium collection of coats and jackets designed to
            keep you cozy and fashionable all season long
          </p>
          <Button className='text-uppercase'>
            buy now
          </Button>
        </div>
        <div className="hero-image">
          <img src={HeroImages} alt="hero-image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
