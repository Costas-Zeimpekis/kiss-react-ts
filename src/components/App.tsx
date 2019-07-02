import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Body from '../containers/Body/Body';
import Footer from './Footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
