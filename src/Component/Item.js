import React from 'react';

const Item = ( props ) => (
    <div className="item">
        <img src={props.data.img} alt={props.data.name}></img>
        <div className="text-item">
            <div className="text-title">{props.data.name}</div>
            <div className="text-rate"><i className="fa fa-star"></i> {props.data.rate}</div>
            <div className="text-overview">{props.data.overview}</div>
        </div>
    </div>
)
export default Item;