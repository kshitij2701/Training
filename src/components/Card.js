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
  constructor(props){
    super(props);

    this.state = {
      showImage: false ,
      inCart: 0,
   };

  }

  render() {
    console.log("logged via this",this.props);
    //props destructuring .
    const {url,prodName,_id,desc}= this.props.values; 

    const handleClick = () => {
      // syntax 1
       this.setState({
         // ...this.state (for spreading state) 
         ...this.state,
         showImage: true,
    });

  };

  const handleAdd =() => {
    // syntax 2
     this.setState((state) => {
       return {
        ...state,
        inCart: state.inCart +1,
       };
    });

  };
    
    return (
        <div class="card">
          {this.state.showImage ? (
        <img src={url} class="card-img-top img-flex" alt="..."/>
          ) : (
            <h3>Not Showing the Image as of now</h3>
          )}
        <div class="card-body">
        <h5 class="card-title">{prodName}</h5>
        <p class="card-text">{desc}</p>
        <button class="btn btn-primary" onClick={handleClick}>
          Press to show Image
        </button>
        <br />
        <br />
        <button onClick={handleAdd} className = "btn btn-info ml-5">
          {this.state.inCart == 0
          ? "Add to cart"
           : `${this.state.inCart} added, press to add more`}

        </button>
      </div>
    </div>
      );
  }
}

export default Card;



