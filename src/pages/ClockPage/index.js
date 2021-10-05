import React, { useEffect, useRef } from 'react'
import { Container, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RefreshIcon from '@material-ui/icons/Refresh';
import Hours from '../../components/Hours'
import Minutes from '../../components/Minutes'
import Seconds from '../../components/Seconds'
import './styles.css'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    clockController: {
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    timerBtns: {
        visibility: 'hidden',
        marginLeft: '3rem',
        border: 'none',
        color: "green",
        '@media (max-height: 450px)': {
            marginLeft: 0,
            position: 'absolute',
            right: 40,
        }
    },
    refreshBtn: {
        border: 'none',
        visibility: "hidden",
        '@media (max-height: 450px)': {
            marginLeft: 0,
            position: 'absolute',
            right: 0,
            top: 4,
        }
    }
}))

export default function ClockPage() {
    const classes = useStyles()
    // counter for seconds from 0 - 9
    const count = useRef(0)
    // Hours Increment for hours timer
    const increHourOne = useRef(0)
    const increHourTwo = useRef(0)
    // Minutes Increment for minutes timer
    const increMinOne = useRef(0)
    const increMinTwo = useRef(0)
    // Seconds Increment for seconds timer
    const increSecOne = useRef(0)
    const increSecTwo = useRef(0)
    // Hours Timer Ref to update css
    const hourDigitOne = useRef(0)
    const hourDigitTwo = useRef(0)
    // Minutes Timer Ref to update css
    const minuteDigitOne = useRef(0)
    const minuteDigitTwo = useRef(0)
    // Seconds Timer Ref to update css
    const secondDigitOne = useRef(0)
    const secondDigitTwo = useRef(0)
    // Square Ref
    const squareSecTwo = useRef()
    const squareSecOne = useRef()
    const squareMinTwo = useRef()
    const squareMinOne = useRef()
    const squareHourTwo = useRef()
    const squareHourOne = useRef()
    // Timer Button Group Ref
    const timerButtons = useRef()

    // use effect to start localTime function
    useEffect(() => {
        localTime()
    })

    // variable timer to clearInterval if needed
    let timer
    // interval function to start clock
    function startInt() {
        timer = setInterval(() => {
            startClock()
        }, 1000)
    }

    // function to set local time on clock
    function localTime() {
        let date = new Date()
        let time = date.toLocaleTimeString('it-IT').split(":")
        let seconds = time[2].split("")
        let minutes = time[1].split("")
        let hours = time[0].split("")
        // set count to second digit of seconds
        count.current = (parseInt(seconds[1]))
        // update increment of seconds to real time, 1 second = 10%
        increSecTwo.current = (-parseInt(seconds[1] + 0)) // increment box, second digit of seconds
        // increSecOne.current = (-parseInt(seconds[0] + 0)) // increment box, first digit of seconds
        increSecOne.current = (-parseInt(seconds[0]) * 16.666) // increment box, first digit of seconds
        // update increment of minutes to real time
        increMinTwo.current = (-parseInt(minutes[1] + 0)) // increment box, second digit of minutes
        // increMinOne.current = (-parseInt(minutes[0] + 0)) // increment box, first digit of minutes
        increMinOne.current = (-parseInt(minutes[0]) * 16.666) // increment box, first digit of minutes
        // update increment of hours to real time
        increHourTwo.current = (-parseInt(hours[1] + 0))  // increment box, second digit of hours
        increHourOne.current = (-parseInt(hours[0]) * 33.333)  // increment box, first digit of hours
        // update digits of seconds, moves box up by seconds increment
        secondDigitTwo.current.style.transform = `translateY(${increSecTwo.current}%)`
        secondDigitOne.current.style.transform = `translateY(${increSecOne.current}%)`
        // update digits of minutes, moves box up by minutes increment
        minuteDigitTwo.current.style.transform = `translateY(${increMinTwo.current}%)`
        minuteDigitOne.current.style.transform = `translateY(${increMinOne.current}%)`
        // update digits of hours, moves box up by hours increment
        hourDigitTwo.current.style.transform = `translateY(${increHourTwo.current}%)`
        hourDigitOne.current.style.transform = `translateY(${increHourOne.current}%)`
        // starts the clock by calling startInt function
        startInt()
    }
    // function to start interval for the clock
    function startClock() {
        if (count.current < 9) {
            secondDigitTwo.current.style.transition = 'transform 0.5s linear' // add css to smooth movement of 2nd digit of seconds box
            count.current += 1 // count to represent current number of seconds (2nd digit)
            increSecTwo.current = increSecTwo.current + -10 // increment count of seconds digit #2 (negative to move box upwards)
            secondDigitTwo.current.style.transform = `translateY(${increSecTwo.current}%)` // move seconds digit #2 box up by 10%
        } else if (count.current === 9) {
            secondDigitTwo.current.style.transition = 'transform 0.25s linear' // change transition speed of box 
            secondDigitTwo.current.style.transform = 'translateY(0)' // reset box position
            updateSecond()
        }
    }
    // function to update first digit of seconds on the clock
    function updateSecond() {
        if (increSecTwo.current === -90 && increSecOne.current > -83.33) {
            secondDigitTwo.current.style.transition = 'transform 0.5s linear'
            increSecOne.current = increSecOne.current + -16.666
            count.current = 0
            increSecTwo.current = 0
            secondDigitOne.current.style.transform = `translateY(${increSecOne.current}%)`
        } else if (increSecOne.current <= -83.33) {
            secondDigitOne.current.style.transition = 'transform 0.25s linear'
            secondDigitOne.current.style.transform = 'translateY(0)'
            updateMinute()
        }
    }
    // function to update second digits of minutes on the clock
    function updateMinute() {
        if (increSecOne.current <= -83.33 && increMinTwo.current !== -90) {
            minuteDigitTwo.current.style.transition = 'transform 0.5s linear'
            increMinTwo.current = increMinTwo.current + -10
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            minuteDigitTwo.current.style.transform = `translateY(${increMinTwo.current}%)`
        } else if (increMinTwo.current === -90) {
            minuteDigitTwo.current.style.transition = 'transform 0.25s linear'
            minuteDigitTwo.current.style.transform = 'translateY(0)'
            minuteProgress()
        }
    }
    // function to update first digit of minutes on clock
    function minuteProgress() {
        if (increMinTwo.current === -90 && increMinOne.current > -83.33) {
            minuteDigitTwo.current.style.transition = 'transform 0.5s linear'
            increMinOne.current = increMinOne.current + -16.666
            minuteDigitOne.current.style.transform = `translateY(${increMinOne.current}%)`
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            increMinTwo.current = 0
        } else if (increMinOne.current <= -83.33) {
            minuteDigitOne.current.style.transition = 'transform 0.25s linear'
            minuteDigitOne.current.style.transform = 'translateY(0)'
            updateHour()
        }
    }
    // function to update second digits of hours on clock
    function updateHour() {
        minuteDigitOne.current.style.transition = 'transform 0.5s linear'
        increHourTwo.current = increHourTwo.current + -10
        increSecTwo.current = 0
        count.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        hourDigitTwo.current.style.transform = `translateY(${increHourTwo.current}%)`
        if (increHourOne.current !== -66.666 && increHourTwo.current === -100) {
            hourDigitTwo.current.style.transition = 'transform 0.25s linear'
            hourDigitTwo.current.style.transform = 'translateY(0)'
            progressHour()
        } else if (increHourOne.current === -66.666 && increHourTwo.current === -40) {
            restartClock()
        }
    }
    // function to update first digit of hours on clock
    function progressHour() {
        hourDigitOne.current.style.transition = 'transform 0.5s linear'
        increHourOne.current = increHourOne.current + -33.333
        hourDigitOne.current.style.transform = `translateY(${increHourOne.current}%)`
        increSecTwo.current = 0
        count.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        increHourTwo.current = 0
    }
    // function to restart clock once midnight is reached
    function restartClock() {
        hourDigitOne.current.style.transition = 'transform 0.25s linear'
        hourDigitOne.current.style.transform = 'translateY(0)'
        hourDigitTwo.current.style.transition = 'transform 0.25s linear'
        hourDigitTwo.current.style.transform = 'translateY(0)'
        count.current = 0
        increSecTwo.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        increHourTwo.current = 0
        increHourOne.current = 0
    }

    function resetClock() {
        clearInterval(timer)
        timer = null
        count.current = 0
        increSecTwo.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        increHourTwo.current = 0
        increHourOne.current = 0
        hourDigitOne.current.style.transform = 'translateY(0)'
        hourDigitTwo.current.style.transform = 'translateY(0)'
        minuteDigitOne.current.style.transform = 'translateY(0)'
        minuteDigitTwo.current.style.transform = 'translateY(0)'
        secondDigitOne.current.style.transform = 'translateY(0)'
        secondDigitTwo.current.style.transform = 'translateY(0)'
        timerButtons.current.style.visibility = 'visible'
    }

    const handleClockButton = event => {
        let buttons = document.getElementById("timerButtons")
        let refresh = document.getElementById("refreshButton")

        clearInterval(timer)
        timer = null
        localTime()
        timerButtons.current.style.visibility = 'hidden'
        refresh.style.visibility = 'hidden'

        if (buttons.textContent === "Stop") {
            buttons.style.color = "green"
            buttons.textContent = "Start"
        }
    }

    const handleTimerButton = event => {
        let buttons = document.getElementById("timerButtons")
        let refresh = document.getElementById("refreshButton")
        resetClock()

        if (buttons.textContent === "Stop") {
            buttons.style.color = "green"
            buttons.textContent = "Start"
        }

        if (refresh.style.visibility === "visible") {
            refresh.style.visibility = "hidden"
        }
    }

    const handleStartButton = event => {
        let buttons = document.getElementById("timerButtons")
        let refresh = document.getElementById("refreshButton")

        if (buttons.textContent === "Start") {
            startInt()
            buttons.textContent = "Stop"
            buttons.style.color = "red"
        } else if (buttons.textContent === "Stop") {
            clearInterval(timer)
            timer = null
            refresh.style.visibility = "visible"
            buttons.style.color = "green"
            buttons.textContent = "Start"
        }
    }

    const handleRefreshButton = event => {
        let buttons = document.getElementById("timerButtons")
        let refresh = document.getElementById("refreshButton")
        refresh.style.visibility = "hidden"
        resetClock()

        if (buttons.textContent === "Stop") {
            buttons.textContent = "Start"
            buttons.style.color = "green"
        }
    }

    return (
        <>
            <Container className={classes.container}>
                <Hours
                    hourDigitOne={hourDigitOne}
                    hourDigitTwo={hourDigitTwo}
                    squareHourOne={squareHourOne}
                    squareHourTwo={squareHourTwo}
                />
                <Minutes
                    minuteDigitOne={minuteDigitOne}
                    minuteDigitTwo={minuteDigitTwo}
                    squareMinOne={squareMinOne}
                    squareMinTwo={squareMinTwo}
                />
                <Seconds
                    secondDigitOne={secondDigitOne}
                    secondDigitTwo={secondDigitTwo}
                    squareSecOne={squareSecOne}
                    squareSecTwo={squareSecTwo}
                />
                <div className={classes.clockController}>
                    <Button onClick={handleClockButton}>Clock</Button>
                    <Button onClick={handleTimerButton}>Timer</Button>
                    <Button
                        ref={timerButtons}
                        className={classes.timerBtns}
                        onClick={handleStartButton}
                        id="timerButtons"
                    >
                        Start
                    </Button>
                    <Button
                        size="small"
                        className={classes.refreshBtn}
                        id="refreshButton"
                        onClick={handleRefreshButton}
                    >
                        <RefreshIcon fontSize="small" />
                    </Button>
                </div>
            </Container>
        </>
    )
}