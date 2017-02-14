import React from 'react';
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
                <br/>
                <button className="underTwentyOne" onClick={() => this.notOverTwentyOne()}>Under</button>
            </div>
        )
    }
}

export default TwentyOneAndOverBox;
