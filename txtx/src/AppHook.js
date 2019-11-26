import React from 'react';
import {useEffect, useState, useRef} from 'react';


export default function AppHook(props)
{

    let [counter, setCounter] = useState(props.counter);
    let [increment, setincrement] = useState(props.increment);
    
    let counterRef = useRef(counter);
    let incementRef = useRef(increment);

    useEffect(() => {setincrement(props.increment); }, [props.increment])

    // run only once
    useEffect(()=>{console.log("component did mount"); setInterval(() =>{console.log(counterRef.current = counterRef.current+incementRef.current);setCounter(counter=>counter+incementRef.current); }, 1000); }, [])
      
    return(
       <div className="AppHook"/>
    )
}