function RandomQuoteMachine() {
    const arr = ['"The purpose of our lives is to be happy." — Dalai Lama', 
    '"Life is what happens when you are busy making other plans." — John Lennon',
    '"Get busy living or get busy dying." — Stephen King',
    '"You only live once, but if you do it right, once is enough." — Mae West',
    '"Many of life’s failures are people who did not realize how close they were to success when they gave up."– Thomas A. Edison'
];
    
    const [quote, setQuote] = React.useState("Click the button below!");
    const [bgColor, setbgColor] = React.useState("#fff");
    
    const randomClick = () => {
        const randomQuote = arr[Math.floor(Math.random()*arr.length)]
        setQuote(randomQuote)
        };

    const bgColorClick = () => {
        const randombgColor = '#' + Math.random().toString(16).slice(2,8);
        setbgColor(randombgColor)
    }

    return (
        <div class='d-flex justify-content-center align-items-center flex-column  vw-100 vh-100' style={{backgroundColor: `${bgColor}`}}>
            <h1 class='text-center mb-5'>Random-Quote-Machine</h1>
            <h2 class='bg-light rounded p-3'>{quote}</h2>
            <div class='text-center mt-5'>
                <button class='btn btn-primary' type='button' onClick={() => {bgColorClick(); randomClick()}}>Try again</button>
            </div>
        </div>
    )
}

ReactDOM.render(<RandomQuoteMachine />, document.getElementById('root'));
