import React, {Component} from 'react';
import Flat from './flat.jsx'
import flats from '../../data/flats.js';


console.log(flats)

class FlatList extends Component{

  // renderList = () => {
  //   {return flats.map((flat) =>  <Gif flat={flat}/> )}

  // }



  render(){
    return(
      <div className="flat-list" >
        {flats.map((flat) => {
              {/*return <h1>{flat.name} </h1>;*/}
              {/*return <FlatList />;*/}
              return <Flat imageUrl={flat.imageUrl} name= {flat.name} priceCurrency={flat.priceCurrency} price={flat.price} />;
            })}
      </div>
    )
  }
}

export default FlatList;

