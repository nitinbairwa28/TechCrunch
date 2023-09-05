import React, { useState } from 'react';

// Header component
function Header() {
  const [headerColor, setHeaderColor] = useState('rgb(0, 128, 255)');

  const changeHeaderColor = () => {
    console.log("Changing header color...");
    const colors = ["#336699", "#FF5733", "#33CC99", "#FF33CC"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setHeaderColor(colors[randomIndex]);
  };

  return (
    <header style={{ backgroundColor: headerColor, padding: '80px', textAlign: 'center', fontSize: 'xx-large', margin: '0' }}>
      <p><b>Welcome To My Profile</b></p>
      <button id="colorButton" onClick={changeHeaderColor}>Change Header Color</button>
    </header>
  );
}

// ProfileDetails component
function ProfileDetails() {
  return (
    <div className="profile-details">
      <div className="profile-content">
        <img src="/ProfileImage.jpg" alt="Nitin Bairwa" className="fade" />
        <h2><b>Nitin Bairwa</b></h2>
        <p>WebDeveloper-Front End</p>
        <h2><b>Skills</b></h2>
        <p><li>JavaScript</li><br></br>
        <li>ReactJS</li><br></br>
        <li>Bootstrap</li><br></br>
        <li>HTML</li><br></br>
        <li>CSS</li><br></br>
        <li>C</li></p>
        <br></br>

        <h2><b>Hobbies</b></h2>
        <p><li>Reading Books</li><br></br>
        <li>Know About Geopolitics</li><br></br>
        <li>Yoga</li><br></br>
        </p>
        <br></br>

        <h2><b>About Me</b></h2>
        <p>Hi, I am Nitin. I'm a passionate Web Developer with a love for coding. With a year of experience, I've worked on a variety of projects, ranging from simple to complex.<br />Feel Free to Contact For Any Professional Work.</p>
        <h2><b>Contact</b></h2>
        <a href="mailto:nitinbairwa909@gmail.com">nitinbairwa909@gmail.com</a><br />
        <a href="tel:7023368764">7023368764</a>
      </div>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(0, 128, 255)', padding: '20px', textAlign: 'center', width: '100%' }}>
      &#169;copyright Nitin Bairwa
    </footer>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProfileDetails />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  aboutContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop:'100px',
    marginBottom:'300px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
};


export default App;
