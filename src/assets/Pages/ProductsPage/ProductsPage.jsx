import "./ProductsPage.css";
import {Card} from '../../Components/index'
import ProductData from '../../Sections/Data/ProductsData'
import { UpButton } from "../../Components/index";

const ProductsPage = () => {

  const cards = ProductData.map(card => {
    return <Card key={card.id} image={card.image} title={card.title} price={card.price} rate={card.rate} />
  })

  return (
    <>
      <section id="products" className="position-relative">
        <h1 className="text-uppercase mt-5 position-relative text-center">
          products
        </h1>
        <div className="cards mt-5 d-flex justify-content-center align-items-center flex-wrap">
          {cards}
          {cards}
          {cards}
        </div>
        <UpButton />
      </section>
    </>
  );
};

export default ProductsPage;
