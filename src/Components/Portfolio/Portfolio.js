import React, { Component } from 'react';
import MobileVersion from "../MobileVersion";
import DesktopVersion from "../DesktopVersion";
import "../Portfolio/Portfolio.css";

class Portfolio extends Component {
  state = {
    width: window.innerWidth,
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  render() {
    const { width } = this.state;
    if(width <= 850) {
      return (
        <MobileVersion/>
      );
    }
    else {
      return (
        <DesktopVersion/>
      );
    }
  }
}

export default Portfolio;
