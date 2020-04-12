import React from 'react';
import { useReducer } from 'react';

const initialState = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };

        default:
            throw new Error();
    }
}

const ReducerCount = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>Count: {state.count} Number</h2>

            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
};

export default ReducerCount;