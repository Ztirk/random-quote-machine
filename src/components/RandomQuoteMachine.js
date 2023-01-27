import React, {useState} from 'react';
import './RandomQuoteMachine.css';

export default function RandomQuoteMachine() {
    const arr = ['"The purpose of our lives is to be happy." — Dalai Lama', 
    '"Life is what happens when you are busy making other plans." — John Lennon',
    '"Get busy living or get busy dying." — Stephen King',
    '"You only live once, but if you do it right, once is enough." — Mae West',
    '"Many of life’s failures are people who did not realize how close they were to success when they gave up."– Thomas A. Edison'
];
    
    const [quote, setQuote] = useState("");
    const [bgColor, setbgColor] = useState("#fff");

    
    const randomClick = () => {
        const randomQuote = arr[Math.floor(Math.random()*arr.length)]
        setQuote(randomQuote)
        };

    const bgColorClick = () => {
        const randombgColor = '#' + Math.random().toString(16).slice(2,8);
        setbgColor(randombgColor)
    }

    return (
        <div style={{backgroundColor: `${bgColor}`}}>
            <h1>Random-Quote-Machine</h1>
            <h2>{quote}</h2>
            <button type='button' onClick={() => {bgColorClick(); randomClick()}}>Try again</button>
        </div>
    )
}

