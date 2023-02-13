import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import BlocCard from './components/BlocCard';
import Footer from './components/Footer';
// import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BlocCard />
            <Footer />
        </div>
    );
};

export default App;