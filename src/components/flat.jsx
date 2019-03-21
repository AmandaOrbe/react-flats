import React, {Component} from 'react';



class Flat extends Component{


  render(){
    // if (!this.props.id) {
    //   return null;
    // }
    return(
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.imageUrl}')` }}>
        <h5 className= "card-category">  {this.props.price} <span> {this.props.priceCurrency}</span></h5>
        <h3 className= "card-description"> {this.props.name}</h3>
      </div>


    )
  }
}

export default Flat;

