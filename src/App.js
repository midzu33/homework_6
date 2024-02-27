import { useEffect, useState } from 'react';

export default function Demo( ) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('The count is:', count);

        return () => {
            console.log('you clicked! you clicked!');
        };
    }, [count]);

    return (
        <div className='count'>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}