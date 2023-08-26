import React, { PureComponent, useEffect, useState } from 'react'

 const Timing =()=>  {
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
        setCounter(100);
    },[])

    return (
      <div>
        <h1>Timing</h1>
        <button onClick={()=>{
            setCounter(counter+1);
        }}>+</button>

        <h1>{counter}</h1>

        <button onClick={()=>{
            setCounter(counter-1);
        }}>-</button>
      </div>
    )

  }

export default Timing