/*function Hello (props) {
        return <div> 
        <h1> name : {props.name}</h1>
        </div>
    }
    export default Hello ;
    */
   import React from 'react';
   class Hello extends React.Component {
       render () {
           return (
               <div>
                   <h1>name : {this.props.name}</h1>
               </div>
           );
       }
   }
   export default Hello;