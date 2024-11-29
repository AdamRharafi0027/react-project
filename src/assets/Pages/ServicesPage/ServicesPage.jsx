import "./ServicesPage.css";
import { Services } from "../../Sections/index";
import { UpButton } from "../../Components";

const ServicesPage = () => {
  return (
    <>
      <div id="ser">
        <Services />
        <UpButton />
      </div>
    </>
  );
};

export default ServicesPage;
