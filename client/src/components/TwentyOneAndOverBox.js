import React from 'react';
import {browserHistory} from 'react-router';


class TwentyOneAndOverBox extends React.Component{
    isOverTwentyOne() {
        browserHistory.push('/search');
    }
    notOverTwentyOne() {
        browserHistory.push('/denied')
    }
    render() {
        return (
            <div>
                <button
                    className="underTwentyOne"
                    onClick={() => this.isOverTwentyOne()}
                >
                    Over
                </button>
                <br/>
                <button
                    className="underTwentyOne"
                    onClick={() => this.notOverTwentyOne()}
                >
                    Under
                </button>
            </div>
        )
    }
}

export default TwentyOneAndOverBox
