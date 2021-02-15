import React from 'react';

const loadingStyle = {
    'padding-top': '10vh',
    'padding-bottom': '2vh',
    margin: 0,
    'font-size': '6em',
    'font-family': 'American Typewriter, serif',
    color: 'orange',
}

const Loading = () => {
    return (
        <h1 style={loadingStyle}>Loading</h1>
    );
};

export default Loading;