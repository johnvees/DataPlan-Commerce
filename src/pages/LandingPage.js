import React, { Component } from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Landing/Hero';
import Content from '../parts/Landing/Content';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <Content></Content>
      </div>
    );
  }
}
