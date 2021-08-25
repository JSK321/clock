import React, { useState, useEffect, useRef } from 'react'
import { Container, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
    circle: {
        // zIndex: -1,
        height: 55,
        width: 55,
        // transform: 'translate(-50%, -50%)',
        // transform: 'translate(105%, -270%)',
        transform: 'translate(933%, -270%) scale(.75)',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: '50%',
        border: '1px solid black',
    }
}))

export default function MainPage() {
    const classes = useStyles()
    // const time = setInterval(localTime, 1000)
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
    // Circle Ref seconds
    const secCircleTwo = useRef()

    useEffect(() => {
        localTime()
        // startClock()
    }, [])

    function localTime() {
        let date = new Date()
        let time = date.toLocaleTimeString('it-IT').split(":")
        let seconds = time[2].split("")
        let minutes = time[1].split("")
        let hours = time[0].split("")

        count.current = (parseInt(seconds[1]))
        increSecTwo.current = (-parseInt(seconds[1] + 0))
        increSecOne.current = (-parseInt(seconds[0] + 0))

        increMinTwo.current = (-parseInt(minutes[1] + 0))
        increMinOne.current = (-parseInt(minutes[0] + 0))

        increHourTwo.current = (-parseInt(hours[1] + 0))
        increHourOne.current = (-parseInt(hours[0] + 0))

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
                secondDigitTwo.current.style.transform = `translateY(${increSecTwo.current}%)`
            } else if (count.current === 9) {
                secondDigitTwo.current.style.transition = 'transform 0.25s linear'
                secondDigitTwo.current.style.transform = 'translateY(0)'
                updateSecond()
            }
        }, 1000)

        const circle = setInterval(() => {
            // if(secCircleTwo.current.style.transform = 'translate(933%, -270%) scale(.75)') {
            //     secCircleTwo.current.style.transform = 'translate(933%, -270%) scale(.5)'
            // } 
            // if (secCircleTwo.current.style.transform = 'translate(933%, -270%) scale(.5)') {
            //     secCircleTwo.current.style.transform = 'translate(933%, -270%) scale(.75)'
            // }
       
        }, 1000)
    }

    function updateSecond() {
        if (increSecTwo.current === -90 && increSecOne.current !== -50) {
            secondDigitTwo.current.style.transition = 'transform 0.5s linear'
            increSecOne.current = increSecOne.current + -10
            count.current = 0
            increSecTwo.current = 0
            secondDigitOne.current.style.transform = `translateY(${increSecOne.current}%)`
        } else if (increSecOne.current === -50) {
            secondDigitOne.current.style.transition = 'transform 0.25s linear'
            secondDigitOne.current.style.transform = 'translateY(0)'
            updateMinute()
        }
    }

    function updateMinute() {
        if (increSecOne.current === -50 && increMinTwo.current !== -90) {
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

    function minuteProgress() {
        if (increMinTwo.current === -90 && increMinOne.current !== -50) {
            minuteDigitTwo.current.style.transition = 'transform 0.5s linear'
            increMinOne.current = increMinOne.current + -10
            minuteDigitOne.current.style.transform = `translateY(${increMinOne.current}%)`
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            increMinTwo.current = 0
        } else if (increMinOne.current === -50) {
            minuteDigitOne.current.style.transition = 'transform 0.25s linear'
            minuteDigitOne.current.style.transform = 'translateY(0)'
            updateHour()
        }
    }

    function updateHour() {
        minuteDigitOne.current.style.transition = 'transform 0.5s linear'
        increHourTwo.current = increHourTwo.current + -10
        increSecTwo.current = 0
        count.current = 0
        increSecOne.current = 0
        increMinTwo.current = 0
        increMinOne.current = 0
        hourDigitTwo.current.style.transform = `translateY(${increHourTwo.current}%)`
        console.log(increHourTwo.current)
        if (increHourOne.current !== -20 && increHourTwo.current === -100) {
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
                <div ref={secCircleTwo} className={classes.circle} />
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
