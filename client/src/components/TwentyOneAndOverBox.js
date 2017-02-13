import React from 'react';
import IsOverTwentyOne from './IsOverTwentyOne';
import NotOverTwentyOne from './NotOverTwentyOne';
import {browserHistory} from 'react-router';





class TwentyOneAndOverBox extends React.Component{
    isOverTwentyOne(){
        browserHistory.push('/home');
    }

    notOverTwentyOne(){
        browserHistory.push('/denied')
    }

    render(){
        return (
            <div>
                <button className="overTwentyOne" onClick={() => this.isOverTwentyOne()}>Over</button>
                <br/>
                <button className="underTwentyOne" onClick={() => this.notOverTwentyOne()}>Under</button>
            </div>
        )
    }
}

export default TwentyOneAndOverBox;
