import React from 'react';
import './Clock.css';
import '../vendor/normalize.css'

function Clock() {

    const [time, setTime] = React.useState(25*60);
    const [title, setTitle] = React.useState('Let the countdown begin!!!');
    const [isRunning, setIsRunning] = React.useState(false);
    const minutes = padTime(Math.floor(time / 60));
    const seconds = padTime(time - minutes * 60);
    const interval = React.useRef(null);

    function padTime(time) {
        return time.toString().padStart(2, '0');
      };

    function startTimer() {

        setTitle(`You're doing great!`);
        setIsRunning(true);

        interval.current = setInterval (() => {
            setTime(time => {
                if (time >=1){
                   return time - 1;
                } else {
                    resetTimer();
                    return 0;
                };
            });
        }, 1000);
        
    };

    function stopTimer() {
        clearInterval(interval.current);
        setTitle('Keep it up!');
        setIsRunning(false);
    };

    function resetTimer() {
        clearInterval(interval.current);
        setTitle('Ready to go another round?');
        setTime(25*60);
        setIsRunning(false);
    };



    return (
        <div className="clock">
            <p className="title">{title}</p>
            <div className="time">
                <span className="num">{minutes}</span>
                <span className="num num_font">:</span>
                <span className="num">{seconds}</span>
            </div>
            <div className="buttons">
                {isRunning && <button onClick={stopTimer} className="button">Stop</button>}
                {!isRunning && <button onClick={startTimer} className="button">Start</button>}
                <button onClick={resetTimer} className="button">Reset</button>
            </div>
        </div>
    )
}

export default Clock;