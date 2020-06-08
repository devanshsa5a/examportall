import React from 'react';
import './App.css';
import NavHomeComponent from './components/navHomeComponent/NavHomeComponent';
import HomeBannerComponent from './components/homeBannerComponent/HomeBannerComponent';
import CartComponent from './components/cartComponent/CartComponent';
import FooterComponent from './components/footerComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavHomeComponent />
      <HomeBannerComponent />
      <CartComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
