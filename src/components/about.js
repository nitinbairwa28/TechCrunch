import React from 'react';

const AboutUs = () => {
    const marginTopStyle = {
        marginTop: '100px', // You can adjust the value as needed
      };
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to TechCrunch! We value your trust and privacy, and we are committed to ensuring that your personal information is handled with the utmost care and security.
        </p>
        <p>
          TechCrunch is dedicated to providing a secure and user-friendly platform for storing and managing your personal information. We understand the importance of data privacy and have implemented stringent measures to protect your data.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower individuals to take control of their personal information while maintaining the highest standards of data security. We aim to simplify the management of your data and provide you with the tools you need to make informed decisions about your privacy.
        </p>
        
        
        <p>
          At TechCrunch, the security and privacy of your data are our top priorities. We employ the latest encryption technologies to safeguard your information, and we adhere to strict data protection regulations.
        </p>
        
        <h3>Contact Us</h3>
        <p>
          If you have any questions, concerns, or feedback, please don't hesitate to contact us. You can reach our customer support team  through our <a href="/contact">Contact Us</a> page.
        </p>
      </div>
    </section>
  );
};


export default AboutUs;
