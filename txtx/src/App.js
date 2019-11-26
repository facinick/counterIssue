import React from 'react';


class App extends React.Component{

  constructor(props){
    super(props);
    console.log("constructor");
    this.state = {
      counter: props.counter
    }
  }
  shouldComponentUpdate()
  {
    console.log("state/prop changed, should component update?");
    return true;
  }
  render(){
    console.log("render");
    return (<div className="App"/>);
  }
  componentWillReceiveProps(newProps){
    console.log("component received new props, what to do with it?");
  }
  componentWillMount()
  {
    console.log("component will mount");
  }
  componentDidMount()
  {
    console.log("component did mount");
    
    setInterval(function()
    { this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    })); }.bind(this), 1000);

  }
  componentWillUpdate()
  {
    console.log("component will update");
  }
  componentDidUpdate(){
    console.log("component did update");
  }
  componentWillUnmount(){
    console.log("component will unmount");
  }
}

export default App;
