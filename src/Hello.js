import React from 'react';
import { connect } from 'react-redux';

const HelloWorld = ({ messageProperty, eventHandler }) =>
    <div>
        <h1>{messageProperty}</h1>
        <button className="btn btn-primary" onClick={eventHandler('hello 3')}>
            Hello
        </button>
    </div>

const stateToPropertyMapper = (state) =>
    ({ messageProperty: state.message })

// eventhandler is being mapped to the specified function
export default connect(
    stateToPropertyMapper,
    (dispatcher) => {
        return {
            eventHandler: (message) => dispatcher({
                type: 'HELLO',
                data: message})
        }
    }
)(HelloWorld)

//export default HelloContainer