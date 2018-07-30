import React, { Component } from 'react';
import styles from './styles.scss';

class Container extends Component {

  render() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          { this.props.children }
        </div>
        <div className={styles.leftBuffer}></div>
        <div className={styles.rightBuffer}></div>
      </div>

    );
  }

}

export default Container;
