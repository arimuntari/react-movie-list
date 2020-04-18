import React from 'react';
import './App.css';
import Header from './Sekeleton/Header.js';
import Content from './Sekeleton/Content.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {type:"movie"};
  }
  tabMenu = (props) =>{
    this.setState({type: props.type});
  }
  render() {
    return (
      <div className="container">
        <Header tabMenu = {this.tabMenu}/>
        <Content type={this.state.type}/>
      </div>
    );
  }
}

export default App;
