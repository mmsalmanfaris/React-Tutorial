import React from "react";
import App from "../App";


class Apple extends React.Component{
    render(){
        const {_appleInfo} = this.props;
        const {type, color} = _appleInfo;
        return(
            <h2>I'm {type} {color} Apple Garden</h2>
        )
    }
}

export default Apple;