import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const App=()=>{
    const [count, setCount]=useState(0);
    
    const inc=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={inc}>Click me</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
