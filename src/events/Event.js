 import React from 'react';
 class Event extends React.Component {
     eventHander=(enter)=>{
         alert(enter);
     }
     render(){
         return (
             <div>
                 <h1>hi thier How are you?</h1>
                 <button
                 onClick={()=>{
                     this.eventHander('hiiiiii');
                 }}
                 >
                     click me!
                 </button>
                 <a
                 href="#"
                 onClick={()=>{
                     this.eventHander('im fine');
                 }}
                 >
                     link page
                 </a>
             </div>
         );
     }
 }
 export default Event;