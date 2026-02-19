import Carousel from "react-bootstrap/Carousel";
import "./HomeBanner.css";

function HomeBanner() {
  return (
    <section className="homebanner">
      <Carousel slide interval={3000} >
        
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="homebanner-slide">
            <img
              className="homebanner-img"
              src={require("../assets/banner/Banner1.jpeg")}
              alt="Megha Green City"
            />
            <div className="homebanner-overlay"></div>
            <div className="homebanner-center-content">
              <h2>Megha Green City</h2>
              <p>
                A premium residential destination offering modern apartments and
                luxury villas surrounded by lush greenery and elegant design.
              </p>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="homebanner-slide">
            <img
              className="homebanner-img"
              src={require("../assets/banner/Banner2.jpeg")}
              alt="Premium Apartments"
            />
            <div className="homebanner-overlay"></div>
            <div className="homebanner-center-content">
              <h2>Premium Apartments</h2>
              <p>
                Thoughtfully planned homes with modern architecture, efficient
                layouts, and a lifestyle crafted for comfort and elegance.
              </p>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="homebanner-slide">
            <img
              className="homebanner-img"
              src={require("../assets/banner/Banner3.jpeg")}
              alt="Luxury Villas"
            />
            <div className="homebanner-overlay"></div>
            <div className="homebanner-center-content">
              <h2>Luxury Villas</h2>
              <p>
                Experience spacious living with premium finishes, private spaces,
                and a perfect blend of nature and modern lifestyle.
              </p>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <div className="homebanner-slide">
            <img
              className="homebanner-img"
              src={require("../assets/banner/Banner4.jpeg")}
              alt="Modern & Green Living"
            />
            <div className="homebanner-overlay"></div>
            <div className="homebanner-center-content">
              <h2>Modern & Green Living</h2>
              <p>
                Smart planning, efficient design, and green surroundings come
                together to create a truly luxurious and peaceful lifestyle.
              </p>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </section>
  );
}

export default HomeBanner;
