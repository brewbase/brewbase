import React from 'react';
import '../styles/main.css'
import logo from '../media/logo.png'
import {browserHistory} from 'react-router';

class TwentyOneBox extends React.Component{
    isOverTwentyOne() {
        browserHistory.push('/search');
    }
    notOverTwentyOne() {
        browserHistory.push('/denied')
    }
    render() {
        return (
            <div className="splashPage">
                <img src={logo} alt="logo" className="logo"></img>
                <div className="splashButtons">
                    <button
                        className="overTwentyOne"
                        onClick={() => this.isOverTwentyOne()}
                    >
                        I AM 21
                    </button>
                    <br/>
                    <button
                        className="underTwentyOne"
                        onClick={() => this.notOverTwentyOne()}
                    >
                        I AM NOT 21
                    </button>
                </div>
            </div>
        )
    }
}

export default TwentyOneBox
