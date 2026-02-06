import { useState, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {showTimer && <p className="timer-display">Time: <span>{time}s</span></p>}
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "Hide Timer" : "Show Timer"}
            </button>
        </>
    );
}
