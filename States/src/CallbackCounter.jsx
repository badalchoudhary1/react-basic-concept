import { useState } from "react";

export default function CallbackCounter() {
    let [count, setCount] = useState(0);
    let increaseCount = () => {
        setCount((currval)=>{
            return currval+1;
        });
        setCount((currval)=>{
            return currval+1;
        });
    }
    return(
        <div>
            <h1>Counter={count}</h1>
            <button onClick={increaseCount}>
                Increase count
            </button>
        </div>
    )
}