  import React from 'react';
  class Car extends React.Component {
      constructor(props){
          super(props);
          this.state={brand:'pride', color:'white'}
      }
  change =() => {
      this.setState({brand:'pershia', color:'silver'})
  }
  componentDidMount() {
 setInterval(() =>{ 
    this.setState({brand:'pershia',color:'silver'})
},5000);
    }
    render(){
     return(
         <div>
             <h1>
                 my car : {this.state.brand}
             </h1>
             <h2>
                 and color : {this.state.color}
             </h2>
             <button type='button'onClick={this.change}>
                 click me!
             </button>
         </div>
     )
 }
}
export default Car;