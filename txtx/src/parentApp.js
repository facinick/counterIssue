import React from 'react';
import App from './App';
import AppHook from './AppHook';

export default class ParentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            increment:1,
        }
    }
    componentDidMount(){
        console.log("parentComponentMounted");
        setInterval(function()
    { this.setState((prevState, props) => ({
      increment: 1 + prevState.increment
    })); }.bind(this), 5000);
    }
    render(){
        return(
            <React.Fragment>
            {/* <App counter = {0} increment = {this.state.increment}/> */}
            <AppHook counter = {0} increment = {this.state.increment}/>
            </React.Fragment>
        )
    }
}