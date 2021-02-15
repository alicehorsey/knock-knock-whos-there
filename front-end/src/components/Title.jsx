import React from 'react';

const textStyle = {
    'padding-top': '10vh',
    'padding-bottom': '2vh',
    margin: 0,
    'font-size': '6em',
    'font-family': 'American Typewriter, serif',
    'background-image': 'linear-gradient(to left, violet, violet, violet, indigo, blue, green, yellow, orange, red, red, red)',
    '-webkit-background-clip': 'text',
    color: 'transparent',
}


const Title = () => {
    return (
        <h1 style={textStyle}>Knock Knock Who's There?</h1>
    );
};

export default Title;