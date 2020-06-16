import React from 'react';
import { connect } from 'react-redux';

const CounterComponent = ({
    counterValue = 123,
    increment,
    decrement,
    incValueChanged,
    incValue,
    decValueChanged,
    decValue
}) =>
    <div>
        <h1>Counter: {counterValue}</h1>
        <input placeholder="INC"
            onChange={incValueChanged} />
        <input placeholder="DEC"
            onChange={decValueChanged} />
        {incValue}
        <button onClick={() => increment(incValue)} className="btn btn-primary">
            Increment
        </button>
        <button onClick={() => decrement(30)} className="btn btn-primary">
            Decrement
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    counterValue: state.counter,
    incValue: state.incValue
})

const dispatchToPropertyMapper = (dispatch) => {
    return {
        increment: (incValue) => { dispatch({ type: 'INCREMENT', valueInc: incValue }) },
        decrement: (decValue) => dispatch({ type: 'DECREMENT', valueDec: decValue }),
        incValueChanged: (event) => dispatch({ type: 'INC_CHANGED', value: event.target.value })
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(CounterComponent)

//export default CounterComponent
