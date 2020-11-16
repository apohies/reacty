import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Individual() {
    return (
        <div>

            <p> hola individual </p>
            
        </div>
    )
}

export default Individual;

if (document.getElementById('individual')) {
    ReactDOM.render(<Individual />, document.getElementById('individual'));
}
