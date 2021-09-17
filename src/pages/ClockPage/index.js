import React, { useState, useEffect, useRef } from 'react'
import { Container, Button, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Hours from '../../components/Hours'
import Minutes from '../../components/Minutes'
import Seconds from '../../components/Seconds'
import './styles.css'

const useStyles = makeStyles((theme) => ({
    container: {
        border: 'solid 1px black',
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
        border: 'solid 1px pink'
    },
    squareSecTwo: {
        position: 'absolute',
        height: 55,
        width: 55,
        borderRadius: '15px',
        transform: 'translate(413%, -270%) scale(.58)',
        transition: "transform 0.5s linear",
        border: '1px solid black',
    },
    squareSecOne: {
        position: 'absolute',
        height: 55,
        width: 55,
        borderRadius: '15px',
        transform: 'translate(265%, -270%) scale(.58)',
        transition: "transform 0.5s linear",
        border: '1px solid black',
    },
    squareMinTwo: {
        position: 'absolute',
        height: 55,
        width: 55,
        borderRadius: '15px',
        transform: 'translate(74%, -270%) scale(.58)',
        transition: "transform 0.5s linear",
        border: '1px solid black',
    },
    squareMinOne: {
        position: 'absolute',
        height: 55,
        width: 55,
        borderRadius: '15px',
        transform: 'translate(-74%, -270%) scale(.58)',
        transition: "transform 0.5s linear",
        border: '1px solid black',
    },
    squareHourTwo: {
        position: 'absolute',
        height: 55,
        width: 55,
        borderRadius: '15px',
        transform: 'translate(-267.5%, -270%) scale(.58)',
        transition: "transform 0.5s linear",
        border: '1px solid black',
    },
    squareHourOne: {
        position: 'absolute',
        height: 55,
        width: 55,
        borderRadius: '15px',
        transform: 'translate(-415%, -270%) scale(.58)',
        transition: "transform 0.5s linear",
        border: '1px solid black',
    },
    timerBtns: {
        visibility: 'hidden',
        marginLeft: '2rem',
        border: '1px solid green',
        color: "green"
    }
}))

export default function ClockPage() {
    const classes = useStyles()
    // counter for seconds from 0 - 9
    const count = useRef(0)
    // ref to indicate timer control buttons
    const tmrBtn = useRef("Start")
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
    const squareSecTwo = useRef(0)
    const squareSecOne = useRef(0)
    const squareMinTwo = useRef(0)
    const squareMinOne = useRef(0)
    const squareHourTwo = useRef(0)
    const squareHourOne = useRef(0)
    // Rotate Sqaure Ref
    const rotateSecTwo = useRef(0)
    const rotateSecOne = useRef(0)
    const rotateMinTwo = useRef(0)
    const rotateMinOne = useRef(0)
    const rotateHourTwo = useRef(0)
    const rotateHourOne = useRef(0)
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
        increSecOne.current = (-parseInt(seconds[0] + 0)) // increment box, first digit of seconds
        // update increment of minutes to real time
        increMinTwo.current = (-parseInt(minutes[1] + 0)) // increment box, second digit of minutes
        increMinOne.current = (-parseInt(minutes[0] + 0)) // increment box, first digit of minutes
        // update increment of hours to real time
        increHourTwo.current = (-parseInt(hours[1] + 0))  // increment box, second digit of hours
        increHourOne.current = (-parseInt(hours[0] + 0))  // increment box, first digit of hours

        // TESTING ---------------------------------------------------------------//
        // count.current = (0)
        // increSecTwo.current = (0)
        // increSecOne.current = (-40)

        // increMinTwo.current = (-80)
        // increMinOne.current = (-40)

        // increHourTwo.current = (-80)
        // increHourOne.current = (-10)
        // TESTING ---------------------------------------------------------------//

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
            rotateSecTwo.current += 90 // increment to rotate box indicator of seconds digit #2
            secondDigitTwo.current.style.transform = `translateY(${increSecTwo.current}%)` // move seconds digit #2 box up by 10%
            squareSecTwo.current.style.transform = `translate(413%, -270%) scale(.58) rotate(${rotateSecTwo.current}deg)` // rotate seconds digit #2 indicator by 90 deg
        } else if (count.current === 9) {
            rotateSecTwo.current = 0 // reset seconds digit #2 rotation degree to 0
            squareSecTwo.current.style.transform = `translate(413%, -270%) scale(.58) rotate(0deg)` // reset indicator box
            secondDigitTwo.current.style.transition = 'transform 0.25s linear' // change transition speed of box 
            secondDigitTwo.current.style.transform = 'translateY(0)' // reset box position
            updateSecond()
        }
    }
    // function to update first digit of seconds on the clock
    function updateSecond() {
        if (increSecTwo.current === -90 && increSecOne.current !== -50) {
            secondDigitTwo.current.style.transition = 'transform 0.5s linear'
            increSecOne.current = increSecOne.current + -10
            rotateSecOne.current += 90
            count.current = 0
            increSecTwo.current = 0
            secondDigitOne.current.style.transform = `translateY(${increSecOne.current}%)`
            squareSecOne.current.style.transform = `translate(265%, -270%) scale(.58) rotate(${rotateSecOne.current}deg)`
        } else if (increSecOne.current === -50) {
            rotateSecOne.current = 0
            squareSecOne.current.style.transform = `translate(265%, -270%) scale(.58) rotate(0deg)`
            secondDigitOne.current.style.transition = 'transform 0.25s linear'
            secondDigitOne.current.style.transform = 'translateY(0)'
            updateMinute()
        }
    }
    // function to update second digits of minutes on the clock
    function updateMinute() {
        if (increSecOne.current === -50 && increMinTwo.current !== -90) {
            minuteDigitTwo.current.style.transition = 'transform 0.5s linear'
            increMinTwo.current = increMinTwo.current + -10
            rotateMinTwo.current += 90
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            minuteDigitTwo.current.style.transform = `translateY(${increMinTwo.current}%)`
            squareMinTwo.current.style.transform = `translate(74%, -270%) scale(.58) rotate(${rotateMinTwo.current}deg)`
        } else if (increMinTwo.current === -90) {
            rotateMinTwo.current = 0
            squareMinTwo.current.style.transform = `translate(74%, -270%) scale(.58) rotate(0deg)`
            minuteDigitTwo.current.style.transition = 'transform 0.25s linear'
            minuteDigitTwo.current.style.transform = 'translateY(0)'
            minuteProgress()
        }
    }
    // function to update first digit of minutes on clock
    function minuteProgress() {
        if (increMinTwo.current === -90 && increMinOne.current !== -50) {
            minuteDigitTwo.current.style.transition = 'transform 0.5s linear'
            increMinOne.current = increMinOne.current + -10
            rotateMinOne.current += 90
            minuteDigitOne.current.style.transform = `translateY(${increMinOne.current}%)`
            squareMinOne.current.style.transform = `translate(-74%, -270%) scale(.58) rotate(${rotateMinOne.current}deg)`
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            increMinTwo.current = 0
        } else if (increMinOne.current === -50) {
            rotateMinOne.current = 0
            squareMinOne.current.style.transform = `translate(-74%, -270%) scale(.58) rotate(0deg)`
            minuteDigitOne.current.style.transition = 'transform 0.25s linear'
            minuteDigitOne.current.style.transform = 'translateY(0)'
            updateHour()
        }
    }
    // function to update second digits of hours on clock
    function updateHour() {
        minuteDigitOne.current.style.transition = 'transform 0.5s linear'
        increHourTwo.current = increHourTwo.current + -10
        rotateHourTwo.current += 90
        increSecTwo.current = 0
        count.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        hourDigitTwo.current.style.transform = `translateY(${increHourTwo.current}%)`
        squareHourTwo.current.style.transform = `translate(-267.5%, -270%) scale(.58) rotate(${rotateHourTwo.current}deg)`
        if (increHourOne.current !== -20 && increHourTwo.current === -100) {
            rotateHourTwo.current = 0
            squareHourTwo.current.style.transform = `translate(-267.5%, -270%) scale(.58) rotate(0deg)`
            hourDigitTwo.current.style.transition = 'transform 0.25s linear'
            hourDigitTwo.current.style.transform = 'translateY(0)'
            progressHour()
        } else if (increHourOne.current === -20 && increHourTwo.current === -40) {
            restartClock()
        }
    }
    // function to update first digit of hours on clock
    function progressHour() {
        hourDigitOne.current.style.transition = 'transform 0.5s linear'
        increHourOne.current = increHourOne.current + -10
        rotateHourOne.current += 90
        hourDigitOne.current.style.transform = `translateY(${increHourOne.current}%)`
        squareHourOne.current.style.transform = `translate(-415%, -270%) scale(.58) rotate(${rotateHourOne.current}deg)`
        increSecTwo.current = 0
        count.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        increHourTwo.current = 0
    }
    // function to restart clock once midnight is reached
    function restartClock() {
        squareHourOne.current.style.transform = `translate(-415%, -270%) scale(.58) rotate(0deg)`
        squareHourTwo.current.style.transform = `translate(-267.5%, -270%) scale(.58) rotate(0deg)`
        hourDigitOne.current.style.transition = 'transform 0.25s linear'
        hourDigitOne.current.style.transform = 'translateY(0)'
        hourDigitTwo.current.style.transition = 'transform 0.25s linear'
        hourDigitTwo.current.style.transform = 'translateY(0)'
        rotateHourOne.current = 0
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
        
        clearInterval(timer)
        timer = null
        localTime()
        timerButtons.current.style.visibility = 'hidden'

        if (buttons.textContent === "Stop") {
            buttons.style.color = "green"
            buttons.style.border = "1px solid green"
            buttons.textContent = "Start"
        }
    }

    const handleTimerButton = event => {
        resetClock()
    }

    const handleStartButton = event => {
        let buttons = document.getElementById("timerButtons")

        if (buttons.textContent === "Start") {
            startInt()
            buttons.textContent = "Stop"
            buttons.style.color = "red"
            buttons.style.border = "1px solid red"
        } else if (buttons.textContent === "Stop") {
            resetClock()
            buttons.style.color = "green"
            buttons.style.border = "1px solid green"
            buttons.textContent = "Start"
        }
    }

    return (
        <>
            <Container className={classes.container}>
                <div ref={squareSecTwo} className={classes.squareSecTwo} />
                <div ref={squareSecOne} className={classes.squareSecOne} />
                <div ref={squareMinTwo} className={classes.squareMinTwo} />
                <div ref={squareMinOne} className={classes.squareMinOne} />
                <div ref={squareHourTwo} className={classes.squareHourTwo} />
                <div ref={squareHourOne} className={classes.squareHourOne} />
                <Hours
                    hourDigitOne={hourDigitOne}
                    hourDigitTwo={hourDigitTwo}
                />
                <Minutes
                    minuteDigitOne={minuteDigitOne}
                    minuteDigitTwo={minuteDigitTwo}
                />
                <Seconds
                    secondDigitOne={secondDigitOne}
                    secondDigitTwo={secondDigitTwo}
                />
                <div className={classes.clockController}>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Button onClick={handleClockButton}>Clock</Button>
                        <Button onClick={handleTimerButton}>Timer</Button>
                    </ButtonGroup>
                    <Button
                        ref={timerButtons}
                        className={classes.timerBtns}
                        onClick={handleStartButton}
                        id="timerButtons"
                    >
                        Start
                    </Button>
                </div>
            </Container>
        </>
    )
}
