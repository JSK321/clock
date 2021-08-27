import React, { useState, useEffect, useRef } from 'react'
import { Container, Button } from '@material-ui/core'
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
        // alignItems: 'end',
        alignItems: 'center',
        // alignContent: 'center',
        // alignContent: 'flex-end',
        flexWrap: 'wrap',
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
    }
}))

export default function MainPage() {
    const classes = useStyles()
    const count = useRef(0)
    // Hours Increment
    const increHourOne = useRef(0)
    const increHourTwo = useRef(0)
    // Minutes Increment
    const increMinOne = useRef(0)
    const increMinTwo = useRef(0)
    // Seconds Increment 
    const increSecOne = useRef(0)
    const increSecTwo = useRef(0)
    // Hours Timer
    const hourDigitOne = useRef()
    const hourDigitTwo = useRef()
    // Minutes Timer
    const minuteDigitOne = useRef()
    const minuteDigitTwo = useRef()
    // Seconds Timer
    const secondDigitOne = useRef()
    const secondDigitTwo = useRef()
    // Square Ref
    const squareSecTwo = useRef()
    const squareSecOne = useRef()
    const squareMinTwo = useRef()
    const squareMinOne = useRef()
    const squareHourTwo = useRef()
    const squareHourOne = useRef()
    // Rotate Sqaure Ref
    const rotateSecTwo = useRef(0)
    const rotateSecOne = useRef(0)
    const rotateMinTwo = useRef(0)
    const rotateMinOne = useRef(0)
    const rotateHourTwo = useRef(0)
    const rotateHourOne = useRef(0)


    useEffect(() => {
        localTime()
    }, [])

    function localTime() {
        let date = new Date()
        let time = date.toLocaleTimeString('it-IT').split(":")
        let seconds = time[2].split("")
        let minutes = time[1].split("")
        let hours = time[0].split("")

        // count.current = (parseInt(seconds[1]))
        // increSecTwo.current = (-parseInt(seconds[1] + 0))
        // increSecOne.current = (-parseInt(seconds[0] + 0))

        // increMinTwo.current = (-parseInt(minutes[1] + 0))
        // increMinOne.current = (-parseInt(minutes[0] + 0))

        // increHourTwo.current = (-parseInt(hours[1] + 0))
        // increHourOne.current = (-parseInt(hours[0] + 0))

        // TESTING ---------------------------------------------------------------//
        count.current = (0)
        increSecTwo.current = (0)
        increSecOne.current = (-50)

        increMinTwo.current = (-90)
        increMinOne.current = (-50)

        increHourTwo.current = (-30)
        increHourOne.current = (-20)
        // TESTING ---------------------------------------------------------------//

        secondDigitTwo.current.style.transform = `translateY(${increSecTwo.current}%)`
        secondDigitOne.current.style.transform = `translateY(${increSecOne.current}%)`

        minuteDigitTwo.current.style.transform = `translateY(${increMinTwo.current}%)`
        minuteDigitOne.current.style.transform = `translateY(${increMinOne.current}%)`

        hourDigitTwo.current.style.transform = `translateY(${increHourTwo.current}%)`
        hourDigitOne.current.style.transform = `translateY(${increHourOne.current}%)`

        startClock()
    }

    function startClock() {
        const timer = setInterval(() => {
            if (count.current < 9) {
                secondDigitTwo.current.style.transition = 'transform 0.5s linear'
                count.current = count.current + 1
                increSecTwo.current = increSecTwo.current + -10
                rotateSecTwo.current += 90
                secondDigitTwo.current.style.transform = `translateY(${increSecTwo.current}%)`
                squareSecTwo.current.style.transform = `translate(413%, -270%) scale(.58) rotate(${rotateSecTwo.current}deg)`
            } else if (count.current === 9) {
                rotateSecTwo.current = 0
                squareSecTwo.current.style.transform = `translate(413%, -270%) scale(.58) rotate(0deg)`
                secondDigitTwo.current.style.transition = 'transform 0.25s linear'
                secondDigitTwo.current.style.transform = 'translateY(0)'
                updateSecond()
            }
        }, 100)
    }

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

    function progressHour() {
        hourDigitOne.current.style.transition = 'transform 0.5s linear'
        increHourOne.current = increHourOne.current + -10
        hourDigitOne.current.style.transform = `translateY(${increHourOne.current}%)`
        increSecTwo.current = 0
        count.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        increHourTwo.current = 0
    }

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

    const handleStartClick = event => {
        // startClock()

    }


    return (
        <>
            <Button onClick={handleStartClick}>Start</Button>
            <Button>Stop</Button>
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
            </Container>
        </>
    )
}
