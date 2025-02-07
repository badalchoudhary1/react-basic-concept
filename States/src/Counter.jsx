import  { useState } from 'react';
export default function Counter() {
    let [count, setCount] = useState(0);
    let increaseVount=()=>
    {
        setCount(count+1);
    }
    return (
        <div>
            <h1>Counter={count}</h1>
            <button onClick={increaseVount}>
                Increase count
            </button>
        </div>
    )}