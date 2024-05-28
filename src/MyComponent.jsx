/*
updater function = A function passed as an argument to setState() usually.
ex. setYear(year + 1)
Allow for safe updates based on the previous state used with multiple state updates and asynchronous functions.
Good practice to sue updater functions.
*/

import React, {useState} from 'react';

function MyComponent() {

    const [count,setCount] = useState(0);

    function increment(){
        // Updater function is passed as an argument to setState() usually. Allow for safe updates based on the previous state.
        // Used with multiple state updates and asynchronous functions.
        // Updater function takes the PENDING state to calculate NEXT state. React puts your updater function in a queue.
        // During the next render, it will call them in the same order.
        setCount(count => count+1);
    };

    function decrement(){
        setCount(count => count - 1);
    };

    function reset(){
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>


    )


}
export default MyComponent