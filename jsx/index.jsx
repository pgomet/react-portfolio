import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../assets/css/style.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Front to Back." subtitle="A list of past projects I worked on" />
    <h3>Past Projects</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../assets/images/pwa-tracker.png" alt="pwa" deployed="https://pwa-module-19.herokuapp.com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../assets/images/password-gen.png" alt="password" deployed="https://pgomet.github.io/Random-Password-Generator/" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;