import Carousel from "react-bootstrap/Carousel";
import "./HomeBanner.css";

function HomeBanner() {
  return (
    <section className="homebanner">
      <Carousel slide interval={2500}>
        <Carousel.Item>
          <img
            className="d-block w-100 homebanner-img"
            src={require ("../assets/banner/hbanner2-mg.png")}
            alt="First slide"
          />
          <Carousel.Caption className="homebanner-caption">
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homebanner-img"
         src={require ("../assets/banner/hbanner2-mg.png")}
            alt="Second slide"
          />
          <Carousel.Caption className="homebanner-caption">
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homebanner-img"
          src={require ("../assets/banner/hbanner2-mg.png")}
            alt="Third slide"
          />
          <Carousel.Caption className="homebanner-caption">
            <h3>Third Slide Label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HomeBanner;
