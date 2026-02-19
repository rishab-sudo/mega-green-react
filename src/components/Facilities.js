import React from 'react'
import { Container } from 'react-bootstrap'
import './Facilities.css'

export const Facilities = () => {
  const facilities = [
    { id: 1,  img: require("../assets/amenties/mh-eco.jpg"), overlay: 'Eco-Friendly', name: 'Eco-Friendly Campus' },
    { id: 2,  img: require("../assets/amenties/mh-balcony.jpg"), overlay: 'Balcony', name: 'Open Balcony Areas' },
    { id: 3,  img: require("../assets/amenties/mh-carWash.jpg"), overlay: 'Car Wash', name: 'Car Wash Facility' },
    { id: 4,  img: require("../assets/amenties/mh-childd.webp"), overlay: 'Child Care', name: 'Child Care Center' },
    { id: 5,  img: require("../assets/amenties/mh-comfort.jpg"), overlay: 'Seating', name: 'Comfortable Seating' },
    { id: 6,  img: require("../assets/amenties/mh-games.jpg"), overlay: 'Indoor Games', name: 'Indoor Games Room' },
    { id: 7,  img: require("../assets/amenties/mh-gym.jpg"), overlay: 'Gym', name: 'Gym & Fitness' },
    { id: 8,  img: require("../assets/amenties/mh-hall.jpg"), overlay: 'Community', name: 'Community Hall' },
    { id: 9,  img: require("../assets/amenties/mh-kitchen.jpg"), overlay: 'Kitchen', name: 'Modern Kitchen' },
    { id: 10, img: require("../assets/amenties/mh-lift.webp"), overlay: 'Lift', name: 'High-Speed Lifts' },
    { id: 11, img: require("../assets/amenties/mh-park.jpg"), overlay: 'Park', name: 'Green Park Area' },
    { id: 12, img: require("../assets/amenties/mh-pool.jpg"), overlay: 'Pool', name: 'Swimming Pool' },
    { id: 13, img: require("../assets/amenties/mh-power.jpeg"), overlay: 'Power Backup', name: '24x7 Power Backup' },
    { id: 14, img: require("../assets/amenties/mh-shop.jpg"), overlay: 'Shops', name: 'Convenience Shops' },
    { id: 15, img: require("../assets/amenties/mh-theater.jpg"), overlay: 'Theater', name: 'Mini Theater' },
    { id: 16, img: require("../assets/amenties/mh-ample.webp"), overlay: 'Parking', name: 'Ample Parking' },
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
            <div className="image-wrapper">
              <img src={item.img} alt={item.name} />
              <div className="overlay">
                <span>{item.overlay}</span>
              </div>
            </div>
            {/* Name below image */}
            <p className="facility-name">{item.name}</p>
          </div>
        ))}
      </Container>
    </Container>
  )
}
