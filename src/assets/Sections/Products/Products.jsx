import "./Products.css";
import {Card} from "../../Components/index";
import ProductData from "../Data/ProductsData";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Button} from "../../Components/index";

const Products = () => {

  const cards = ProductData.map(card => {
    return <Card key={card.id} image={card.image} title={card.title} rate={card.rate} />
  })

  return (
    <>
      <section id="products" className="position-relative">
        <h1 className="text-uppercase mt-5 position-relative text-center">
          products
        </h1>
        <div className="cards mt-5 d-flex justify-content-center align-items-center flex-wrap">
          {cards}
        </div>
          <Button className='text-uppercase position-absolute top-100 start-50 translate-middle mt-5'>
            more
          </Button>
      </section>
    </>
  );
};

export default Products;
