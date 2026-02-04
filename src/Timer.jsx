import { useState, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="timer-display">Time: <span>{time}s</span></p>
    );
}
