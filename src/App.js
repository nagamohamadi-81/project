//import './App.css';
import Event from './events/Event';
import Clock from './states/Clock';
import Car from './states/states';
import Hello from './props/Hello';
import Whatsapp from './props/Whatsapp';
/* function App() {
  return (
    <div>
    <Hello name ='naimeh'/> 
    <Whatsapp family ='agamohamadi'/>
    </div>
  );
}
*/
function App () {
  return(
    <div>
      <Hello name ='naimeh'/> 
    <Whatsapp family ='agamohamadi'/>
    <Car/>
    <Clock date="new Date()"/>
    <Event/>
  </div>
  );
}
  export default App ;