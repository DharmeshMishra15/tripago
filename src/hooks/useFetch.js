import {useState ,useEffect, useRef } from 'react'


export const useFetch=(url, _options)=>{
   const[data,setData] = useState(null)
   const[isPending,setisPending] = useState(false)
   const[error, setError] = useState(null)
   
   const options = useRef(_options).current

   useEffect(()=>{
     console.log(options)
     const controller = new AbortController()
    
    
     const fetchData = async ()=>{
        setisPending(true)

        try{
            const res = await fetch(url,{signal:controller.signal})
            if(!res.ok)
            {
                throw new Error(res.statusText)
            }
            const json = await res.json()
    
            setisPending(false)
            setData(json)
            setError(null)
        }catch(err){
            if(err.name === "AbortError"){
                console.log('the fetch was aborted')
            } else {
                setisPending(false)
             setError('Could not fetch the data') 
               
            }
             
        }

        
    }

    fetchData()

    return ()=>{
        controller.abort()
    }
   },[url,options])

   return { data, isPending,error }
}

