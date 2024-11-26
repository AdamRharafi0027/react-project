import "./About.css";

const About = () => {
  return (
    <>
      <section id="about" className="d-flex flex-column align-items-center">
        <h1 className="text-uppercase">about us</h1>
        <h3 className="fs-6">Crafting Style and Comfort, One Jacket at a Time</h3>
        <p className="mt-3">
          At JACKETS, we believe that a jacket is more than just a layer of
          clothing—it's a statement. Founded by a team passionate about quality,
          comfort, and timeless style, we aim to deliver coats and jackets that
          not only keep you warm but elevate your wardrobe
        </p>
        <div className="about-content d-flex align-items-center justify-content-between mt-5">
          <div className="why">
            <h2>Why Choose Us?</h2>
            <p>
              Premium Materials: Carefully selected fabrics for unmatched
              durability and comfort. Timeless Designs: Jackets that blend
              classic and modern styles. Customer-Centric Approach: From
              personalized size guides to hassle-free returns, your satisfaction
              is our priority
            </p>
          </div>
          <div className="story">
            <h2>Our Story</h2>
            <p>
              Our journey began with a simple goal: to create outerwear that
              combines functionality with fashion. We started with a small
              collection of classic designs, and thanks to the trust of our
              customers, we've grown into a go-to destination for stylish and
              versatile jackets
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
