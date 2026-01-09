import React, { useEffect, useState } from 'react'

function TimerExample() {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, []) // runs once 
    return (
        <div>
            <h2>timers </h2>
            <p>seconds Passed : {seconds}</p>

        </div>
    )
}

export default TimerExample