// //.....(Functional component of react.).....    

// import React from 'react';
// //https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr


// const Card=(props) =>{
//     console.log(props.values);
//     //props destructuring .
//     const {url,prodName,_id,desc}= props.values;
//   return (
//     <div class="card">
//     <img src={url} class="card-img-top img-flex" alt="..."/>
//     <div class="card-body">
//     <h5 class="card-title">{prodName}</h5>
//     <p class="card-text">{desc}</p>
//     <button class="btn btn-primary">Go somewhere</button>
//   </div>
// </div>
//   );
// };

// export default Card;

// ........ (Class component of react .) .........
import React, { Component } from 'react';

 class Card extends Component {
  render() {
    console.log("logged via this",this.props);
    //props destructuring .
    const {url,prodName,_id,desc}= this.props.values; 

    this.state = {
        btnText: "Buy " + _id,
    };
    return (
        <div class="card">
        <img src={url} class="card-img-top img-flex" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{prodName}</h5>
        <p class="card-text">{desc}</p>
        <button class="btn btn-primary">{this.state.btnText}</button>
      </div>
    </div>
      );
  }
}

export default Card;



