import React from 'react';
import Search from '../Component/Search.js';
import Item from '../Component/Item.js';

const API_KEY = "746dfdd1ef8930cbc18b4af8c13ee0a0";
const link = "http://api.themoviedb.org/3/";
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state ={type: props.type, loading:"loading", items:[]};
    }
    componentDidMount(){
       this.getItem(this.state.type);
    }
    getItem(type, key=""){
      
        var url;
        (key=="")?
             url = `${link}discover/${type}?api_key=${API_KEY}&en=US`: url= `${link}search/${type}?api_key=${API_KEY}&en=US&query=${key}`;
        fetch(url)
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id}`,
            name: type==='tv'? `${data.name}`:`${data.title}`,
            img: data.poster_path?`https://image.tmdb.org/t/p/w400/${data.poster_path}`:"https://dummyimage.com/400x588/fff/050505.png",
            overview: `${data.overview}`,
            rate: `${data.vote_average}`,
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
        
    }
    componentWillUpdate(nextProps, nextState) {
        if (this.props.type != nextProps.type) {
          this.getItem(nextProps.type);
        }
    }
    handleKeyUp = (e) => {
        e.persist();
        var keyword = e.target.value;
        this.getItem(this.state.type, keyword);
    }
    render(){
        return(         
            <div>
            <Search handleKeyUp={(e) =>this.handleKeyUp(e)}></Search>
                <div className="content">
               
                    {
                        this.state.items.length> 0 ? this.state.items.map(item => {
                            const {id}= item;
                             return (
                                 <Item key={id} data={item}/>
                             );
                        }):null
                    }
                </div>
            </div>
        )
    }
}

export default Content;