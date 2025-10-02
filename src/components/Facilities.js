import React from 'react'
import { Container } from 'react-bootstrap'
import './Facilities.css'

export const Facilities = () => {
  const facilities = [
    { id: 1,  img: require("../assets/amenties/mh-eco.jpg"), text: 'Eco-Friendly Campus' },
    { id: 2,  img: require("../assets/amenties/mh-balcony.jpg"), text: 'Open Balcony Areas' },
    { id: 3,  img: require("../assets/amenties/mh-carWash.jpg"), text: 'Car Wash Facility' },
    { id: 4,  img: require("../assets/amenties/mh-childd.webp"), text: 'Child Care Center' },
    { id: 5,  img: require("../assets/amenties/mh-comfort.jpg"), text: 'Comfortable Seating' },
    { id: 6,  img: require("../assets/amenties/mh-games.jpg"), text: 'Indoor Games Room' },
    { id: 7,  img: require("../assets/amenties/mh-gym.jpg"), text: 'Gym & Fitness' },
    { id: 8,  img: require("../assets/amenties/mh-hall.jpg"), text: 'Community Hall' },
    { id: 9,  img: require("../assets/amenties/mh-kitchen.jpg"), text: 'Modern Kitchen' },
    { id: 10, img: require("../assets/amenties/mh-lift.webp"), text: 'High-Speed Lifts' },
    { id: 11, img: require("../assets/amenties/mh-park.jpg"), text: 'Green Park Area' },
    { id: 12, img: require("../assets/amenties/mh-pool.jpg"), text: 'Swimming Pool' },
    { id: 13, img: require("../assets/amenties/mh-power.jpeg"), text: '24x7 Power Backup' },
    { id: 14, img: require("../assets/amenties/mh-shop.jpg"), text: 'Convenience Shops' },
    { id: 15, img: require("../assets/amenties/mh-theater.jpg"), text: 'Mini Theater' },
    { id: 16, img: require("../assets/amenties/mh-ample.webp"), text: 'Ample Parking' },
  ]

  return (
    <Container fluid className="facilities-container-fluid">
      <div className="testimonials-header">
        <h2>Amenities</h2>
        <p>
          The premium features and the attention to detail is eye-catching and soul soothing
        </p>
      </div>
      <Container className="facilities-grid">
        {facilities.map((item) => (
          <div key={item.id} className="facility-card">
            <img src={item.img} alt={item.text} />
            <div className="overlay">
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  )
}
