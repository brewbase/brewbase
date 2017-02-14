import React from 'react';


class Brewery extends React.Component{

    render(){
        return(
            <div style={{width: '100%', height: '20vh'}}>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Brewery;
