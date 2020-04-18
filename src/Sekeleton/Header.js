import React from 'react';
import Title from '../Component/Title.js';
import Nav from '../Component/Nav.js';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {active : "1", title : 'Movie'};
    }
    clickHandler(e){
        e.persist();
      
        var key = e._targetInst.key;
        var items= {active : key, title : e.target.innerText, type : e.target.getAttribute('data-type')};
        this.setState(items);
        this.props.tabMenu(items);
    }
    render(){
        return(
            <div>
                <Nav active ={this.state.active} clickHandler={(e) =>this.clickHandler(e)} />
                <Title title={this.state.title}/>
            </div>
        )
    }
}

export default Header;