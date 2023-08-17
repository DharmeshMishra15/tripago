import { useState } from 'react'
import './App.css';
import TripList from './Components/TripList';


function App() {

  const[showTrips,setShowtrips] = useState(true)
  return (
    <div className="App">
      <button onClick={()=>{setShowtrips(false)}}>hide trips</button>
     {showTrips && <TripList />}
    </div>
  );
}

export default App;
