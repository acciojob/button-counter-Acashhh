import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = ()=>{
    const [count, setCount]=useState(10);

    const inc = ()=>{
        setCount(count+1);
    };
     
    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={inc}>
                Click me
            </button>
        </div>
    )
}

export default App;