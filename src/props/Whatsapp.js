/*function Whatsapp(props) {
 return <div>
    <h2> family : {props.family} </h2>
    </div>
}
export default Whatsapp;
*/
import React from 'react';
class Whatsapp extends React.Component {
    render () {
        return (
            <div>
               <h2>family : {this.props.family}</h2>
            </div>
        );
    }
}
export default Whatsapp;