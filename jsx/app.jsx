import App, { Container } from 'next/app';
import Head from 'next/head';
import Favicon from '../assets/images/Initials-Logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Pina Gomet</title>
          <meta property="og:title" content="Pina Gomet's Portfolio" />
          <meta property="og:description" content="I was born and raised in East Hartford, CT, and moved to Groton, CT in 2018. In December 2021, I received my bachelor's degree in Communication from the University of Connecticut. During my time in college, I was a member of the Women in Business's Membership Engagement Committee, and was the Secretary of the Thai, Lao, and Cambodian Student Association.

I will be attending the University of Connecticut's School of Engineering Coding Bootcamp in March 2022 in the hopes of finding a job in the IT field."/>
          <meta name="description" content="I was born and raised in East Hartford, CT, and moved to Groton, CT in 2018. In December 2021, I received my bachelor's degree in Communication from the University of Connecticut. During my time in college, I was a member of the Women in Business's Membership Engagement Committee, and was the Secretary of the Thai, Lao, and Cambodian Student Association.

I will be attending the University of Connecticut's School of Engineering Coding Bootcamp in March 2022 in the hopes of finding a job in the IT field."/>
          <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Quicksand" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
            integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
            crossOrigin="anonymous"
          />
        </Head>
        <Favicon src="../assets/images/Initials-Logo.png" />
        <div className="container mainContainer">
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default MainApp;