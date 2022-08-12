import React, { useState, useEffect } from 'react'
import './Timer.css'
const Timer = () => {
    const [timerSeconds, setTimerSeconds] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerDays, setTimerDays] = useState();

    let interval;

    const countTimer = () => {

        const endSales = "20 Aug 2022";
        const endSalesDate = new Date(endSales);

        interval = setInterval(() => {
            const currentDate = new Date();
            const totalSeconds = (endSalesDate - currentDate) / 1000;

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const minutes = Math.floor(totalSeconds / 60) % 60 ;
            const seconds = Math.floor(totalSeconds) % 60;
            if(totalSeconds < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });        
    }

    useEffect(() => {
        countTimer();
    })


    return (
        <div className='timer-container'>
            <h2>{timerDays}d </h2>
            <h3>:</h3>
            <h2>{timerHours}</h2>
            <h3>:</h3>
            <h2>{timerMinutes}</h2>
            <h3>:</h3>
            <h2>{timerSeconds}</h2>
        </div>
    )
}

export default Timer