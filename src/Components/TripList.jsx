import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch.js'

//styles
import './TripList.css'
export default function TripList() {
  
  
  const[url,setUrl]=useState('http://localhost:3000/trips')
  const{ data, isPending, error }=useFetch(url,{type:'GET'})
  
  
 
 


  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        {isPending && <div>Loading trips...</div> }
        {error && <div>{error}</div> }
        <ul>
           {data && data.map((trip)=>(
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
           ))}
        </ul>

        <div className="filters">
          <button onClick={()=>{setUrl('http://localhost:3000/trips?loc=europe')}}>
            European Trips
          </button>
          <button onClick={()=>{setUrl('http://localhost:3000/trips?loc=america')}}>
            American Trips
          </button>
        </div>
    </div>
  )
}
