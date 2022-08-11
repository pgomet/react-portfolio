import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Footer from '../components/footer';
import '../assets/css/style.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Get in contact with me." subtitle="Ways to get in contact with me" />
    <hr />
    <div className="row">
      <div className="col contactCol">
        <Card source="../assets/images/gmail.png" text="pina.gomet@gmail.com" />
        <Card source="../assets/images/github.png" text={<a href="https://github.com/pgomet" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source="../assets/images/linkedin.png" text={<a href="https://www.linkedin.com/in/pinagomet/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />
        <Card
          source="../assets/images/resume.png"
        />
        <Card source="../assets/images/phone.png" text="860-899-7108" />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;