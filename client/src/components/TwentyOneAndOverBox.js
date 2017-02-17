import React from 'react';
import { browserHistory } from 'react-router';
import '../../../styles/main.css'
import './backgrounds.css'
import logo from '../media/logo.png'

class TwentyOneAndOverBox extends React.Component{
    isOverTwentyOne() {
        browserHistory.push('/search');
    }
    notOverTwentyOne() {
        browserHistory.push('/denied')
    }
    render() {
        return (
                <div className="splashPage">
                    <img src={logo} alt="logo" className="logo-image"></img>
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

export default TwentyOneAndOverBox
