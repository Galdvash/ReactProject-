import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styleAbout from "./About.module.css";

// Fix for default marker icon issue with Leaflet and Webpack
let DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

L.Marker.prototype.options.icon = DefaultIcon;

const About = () => {
  const position = [51.505, -0.09]; // Replace with your desired coordinates

  return (
    <div className="bodyAbout" style={{paddingBottom:"200px"}}>
      <div className={styleAbout.container}>
        <h1 className={styleAbout.title}>Welcome to Our Platform</h1>
        <div className={styleAbout.centerText}>
          <p className={styleAbout.feature}>Unlock the Power of Online Content Management</p>
          <p className={styleAbout.description}>Welcome to our innovative web application, designed to revolutionize how businesses manage their online presence. Our intuitive system empowers users to publish and distribute content with ease, ensuring maximum impact and visibility.</p>
          <p className={styleAbout.description}>Welcome to our innovative web application, designed to revolutionize how businesses manage their online presence. Our intuitive system empowers users to publish and distribute content with ease, ensuring maximum impact and visibility.</p>
          <p className={styleAbout.description}>Welcome to our innovative web application, designed to revolutionize how businesses manage their online presence. Our intuitive system empowers users to publish and distribute content with ease, ensuring maximum impact and visibility.</p>
        </div>
        <br />
        <h2 className={styleAbout.sectionTitle}>Our Mission:</h2>
        <div className={styleAbout.centerText}>
          <p className={styleAbout.feature}>Our mission is to provide a cutting-edge content management platform that empowers businesses and individuals to effectively manage and enhance their online presence. We strive to offer tools that simplify content distribution, ensure security, and promote professional networking, enabling our users to achieve their digital goals effortlessly.</p>
        </div>
        <br />
        <h2 className={styleAbout.sectionTitle}>Key Features:</h2>
        <ul className={styleAbout.list}>
          <li className={styleAbout.listItem}>
            <p className={styleAbout.feature}><strong>Streamlined Content Management:</strong> Easily publish and manage your content with our user-friendly platform. From articles to announcements, take control of your digital narrative.</p>
          </li>
          <li className={styleAbout.listItem}>
            <p className={styleAbout.feature}><strong>Customized Access Control:</strong> Tailor access permissions to your needs. Users can designate content for public consumption or restrict it to specific audiences, ensuring privacy and security.</p>
          </li>
          <li className={styleAbout.listItem}>
            <p className={styleAbout.feature}><strong>Business-Centric Tools:</strong> Business users can create and distribute custom business cards, facilitating seamless networking and promotion of their work.</p>
          </li>
        </ul>
        <br />
        <h2 className={styleAbout.sectionTitle}>Why Choose Us:</h2>
        <ul className={styleAbout.list}>
          <li className={styleAbout.listItem}>
            <p className={styleAbout.feature}><strong>Simplicity and Efficiency:</strong> Our platform is designed for ease of use, allowing users to navigate and utilize its features effortlessly.</p>
          </li>
          <li className={styleAbout.listItem}>
            <p className={styleAbout.feature}><strong>Flexibility and Control:</strong> Whether you're a regular user or a business professional, our platform offers the flexibility and control you need to effectively manage your online presence.</p>
          </li>
        </ul>

        <p className={styleAbout.description}>Join us and experience the difference in content management. Start maximizing your online potential today with our platform.</p>
        <br />
        <h2 className={styleAbout.sectionTitle}>Our Location:</h2>
        <MapContainer center={position} zoom={13} style={{ height: "500px", width: "60%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Our location
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default About;
