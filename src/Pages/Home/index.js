import Header from './Header/Header';
import React from 'react';
import SessionOne from './SessionOne/SessionOne';
import Main from './Main/Main';
import Footer from './Footer/Footer'
import './index.css'

function index() {
    return (
        <React.Fragment>
            <Header />
            <SessionOne />
            <Main />
            <Footer />
        </React.Fragment>
    )
}

export default index;