import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import './Facilities.css'

export const Facilities = () => {
  const lineRef = useRef(null);

const facilities = [
  { id: 1,  img: require("../assets/amenties/mh-eco.jpg"),      overlay: "Eco-Friendly Campus",        name: "Eco-Friendly" },
  { id: 2,  img: require("../assets/amenties/mh-balcony.jpg"),  overlay: "Open Balcony Areas",         name: "Balcony" },
  { id: 3,  img: require("../assets/amenties/mh-carWash.jpg"),  overlay: "Car Wash Facility",          name: "Car Wash" },
  { id: 4,  img: require("../assets/amenties/mh-childd.webp"),  overlay: "Child Care Center",          name: "Child Care" },
  { id: 5,  img: require("../assets/amenties/mh-comfort.jpg"),  overlay: "Comfortable Seating",        name: "Seating" },
  { id: 6,  img: require("../assets/amenties/mh-games.jpg"),    overlay: "Indoor Games Room",          name: "Indoor Games" },
  { id: 7,  img: require("../assets/amenties/mh-gym.jpg"),      overlay: "Gym & Fitness",              name: "Gym" },
  { id: 9,  img: require("../assets/amenties/mh-kitchen.jpg"),  overlay: "Modern Kitchen",             name: "Kitchen" },
  { id: 10, img: require("../assets/amenties/mh-lift.webp"),    overlay: "High-Speed Lifts",           name: "Lift" },
  { id: 11, img: require("../assets/amenties/mh-park.jpg"),     overlay: "Green Park Area",            name: "Park" },
  { id: 12, img: require("../assets/amenties/mh-pool.jpg"),     overlay: "Swimming Pool",              name: "Pool" },
  { id: 13, img: require("../assets/amenties/mh-power.jpeg"),   overlay: "24x7 Power Backup",          name: "Power Backup" },
  { id: 14, img: require("../assets/amenties/mh-shop.jpg"),     overlay: "Convenience Shops",          name: "Shops" },
  { id: 15, img: require("../assets/amenties/mh-theater.jpg"),  overlay: "Mini Theater",               name: "Theater" },
  { id: 16, img: require("../assets/amenties/mh-ample.webp"),   overlay: "Ample Parking",              name: "Parking" },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // remove if you want reverse on scroll up
          }
        });
      },
      { threshold: 0.3 }
    );

    if (lineRef.current) observer.observe(lineRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="facilities-container-fluid g-0">
      
      {/* Animated line */}
      <div className="dotted-line-wrap">
        <div className="dotted-line" ref={lineRef}></div>
      </div>

      <div className="testimonials-header">
        <h2>Amenities</h2>
        <p>
          The premium features and the attention to detail is eye-catching and soul soothing
        </p>
      </div>

      <Container className="facilities-grid">
        {facilities.map((item) => (
          <div key={item.id} className="facility-card">
            <div className="image-wrapper">
              <img src={item.img} alt={item.name} />
              <div className="overlay">
                <span>{item.overlay}</span>
              </div>
            </div>
            <p className="facility-name">{item.name}</p>
          </div>
        ))}
      </Container>
    </Container>
  );
}