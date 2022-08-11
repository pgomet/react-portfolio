import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../assets/css/style.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Sales to Code." subtitle="The story of my transition from working in sales to software development" />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="ADD PROFILE PIC HERE" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
          I specialize in HTML, CSS, JavaScript, and React on the front-end as well as Node
          and MySQL/Mongo on the back-end to create beautiful and secure applications.
          My biggest priority is to actively learn different coding languages.
        </h4>
      </div>
    </div>
    <h3 className="skills">My Skills</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../assets/images/html.png" alt="html" />
            <IconImage source="../assets/images/bootstrap.png" alt="bootstrap" />
            <IconImage source="../assets/images/css.png" alt="css" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../assets/images/githubIcon.png" alt="github" />
            <IconImage source="../assets/images/handlebars.png" alt="handlebars" />
            <IconImage source="../assets/images/javascript.png" alt="javascript" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../assets/images/jquery.png" alt="jquery" />
            <IconImage source="../assets/images/mern.jpeg" alt="mern" />
            <IconImage source="../assets/images/mongodb.png" alt="mongodb" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../assets/images/mysql.png" alt="mysql" />
            <IconImage source="../assets/images/nodejs.png" alt="node" />
            <IconImage source="../assets/images/React.png" alt="react" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;