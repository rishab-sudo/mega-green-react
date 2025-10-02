import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./TrendingProperty.css";

const TrendingProperty = () => {
  return (
    <div className="property-section">
      {/* Top heading + description */}
      <div className="container-fluid text-center mb-4">
        <h2 className="section-heading">Our Properties</h2>
        <p className="section-desc">Find your dream home with us</p>
      </div>

      {/* Main content */}
      <Container className="property-content-container">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
            <div className="property-card">
              <div className="card-badge">1</div>
              <div className="card-left">
                <img
                  src={require("../assets/products/image-45.png")}
                  alt="DRAWING + DINING"
                />
              </div>
              <div className="card-right">
                <h5>DRAWING + DINING</h5>
                <p><span style={{fontWeight:"600", color:"#000"}}>Floor - </span>Beautiful modern apartment in the city center.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WALLS - </span>Paint over POP punning for a rich smooth look.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>CEILING - </span>Highly aesthetic false ceiling.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WINDOWS - </span>UPVC window with 3 tracks including a mesh door</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>DOOR - </span>8ft. 40mm thick modular panel door with digital lock.</p>
                {/* <div className="card-info">
                  <span style={{fontWeight:"600", color:"#000"}}>2 Beds</span>
                  <span style={{fontWeight:"600", color:"#000"}}>2 Baths</span>
                </div> */}
                <Button className="property-btn" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
            <div className="property-card">
              <div className="card-badge">2</div>
              <div className="card-left">
                <img
                  src={require("../assets/products/image-45.png")}
                  alt="BEDROOM"
                />
              </div>
             <div className="card-right">
                <h5>DRAWING + DINING</h5>
                <p><span style={{fontWeight:"600", color:"#000"}}>Floor - </span>Beautiful modern apartment in the city center.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WALLS - </span>Paint over POP punning for a rich smooth look.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>CEILING - </span>Highly aesthetic false ceiling.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WINDOWS - </span>UPVC window with 3 tracks including a mesh door</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>DOOR - </span>8ft. 40mm thick modular panel door with digital lock.</p>
                {/* <div className="card-info">
                  <span style={{fontWeight:"600", color:"#000"}}>2 Beds</span>
                  <span style={{fontWeight:"600", color:"#000"}}>2 Baths</span>
                </div> */}
                <Button className="property-btn" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
            <div className="property-card">
              <div className="card-badge">3</div>
              <div className="card-left">
                <img
                  src={require("../assets/products/image-45.png")}
                  alt="KITCHEN"
                />
              </div>
              <div className="card-right">
                <h5>DRAWING + DINING</h5>
                <p><span style={{fontWeight:"600", color:"#000"}}>Floor - </span>Beautiful modern apartment in the city center.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WALLS - </span>Paint over POP punning for a rich smooth look.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>CEILING - </span>Highly aesthetic false ceiling.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WINDOWS - </span>UPVC window with 3 tracks including a mesh door</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>DOOR - </span>8ft. 40mm thick modular panel door with digital lock.</p>
                {/* <div className="card-info">
                  <span style={{fontWeight:"600", color:"#000"}}>2 Beds</span>
                  <span style={{fontWeight:"600", color:"#000"}}>2 Baths</span>
                </div> */}
                <Button className="property-btn" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
            <div className="property-card">
              <div className="card-badge">4</div>
              <div className="card-left">
                <img
                  src={require("../assets/products/image-45.png")}
                  alt="BATHROOM"
                />
              </div>
              <div className="card-right">
                <h5>DRAWING + DINING</h5>
                <p><span style={{fontWeight:"600", color:"#000"}}>Floor - </span>Beautiful modern apartment in the city center.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WALLS - </span>Paint over POP punning for a rich smooth look.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>CEILING - </span>Highly aesthetic false ceiling.</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>WINDOWS - </span>UPVC window with 3 tracks including a mesh door</p>
                <p><span style={{fontWeight:"600", color:"#000"}}>DOOR - </span>8ft. 40mm thick modular panel door with digital lock.</p>
                {/* <div className="card-info">
                  <span style={{fontWeight:"600", color:"#000"}}>2 Beds</span>
                  <span style={{fontWeight:"600", color:"#000"}}>2 Baths</span>
                </div> */}
                <Button className="property-btn" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrendingProperty;
