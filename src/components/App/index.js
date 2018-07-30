import React, { Component } from 'react';
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

export default App;
