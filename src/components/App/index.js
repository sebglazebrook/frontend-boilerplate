import React, { Component } from 'react';
import { hot, setConfig } from 'react-hot-loader'
import styles from './styles.scss';
import Container from '../Container'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    );
  }

}

setConfig({ logLevel: 'debug' });

export default hot(module)(App);
