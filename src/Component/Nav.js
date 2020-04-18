import React from 'react';

const Nav = props => (
	<div className="nav">
        <button key='1' data-type='movie' className={['nav-item '  + (props.active === "1" ? 'active':'')]} onClick={props.clickHandler}>Movie</button>
        <button key='2' data-type='tv' className= {['nav-item ' + (props.active === "2" ? 'active':'') ]} onClick={props.clickHandler}>TV Shows</button>
    </div>
)

export default Nav;