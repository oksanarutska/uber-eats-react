import React from 'react';
import './assets/styles/index.scss';

import Header from './components/Header';
import Body from "./components/Body";
import Footer from "./components/Footer"


class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header />
                <Body/>
                <Footer/>

            </div>
        );
    }
}

export default App;
