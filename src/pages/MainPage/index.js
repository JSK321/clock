import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@material-ui/core'
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
        // alignItems: 'center',
        // alignContent: 'flex-end',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
}))

export default function MainPage() {
    const classes = useStyles()

    // const secDigOne = document.getElementById("secDigitOne")
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

    useEffect(() => {
        startClock()
    }, [])

    function startClock() {
        const timer = setInterval(() => {
            if (count.current < 2) {
                secondDigitTwo.current.style.transition = 'transform 0.5s linear'
                count.current = count.current + 1
                increSecTwo.current = increSecTwo.current + -10
                secondDigitTwo.current.style.transform = `translateY(${increSecTwo.current}%)`
            } else if (count.current == 2) {
                secondDigitTwo.current.style.transition = 'transform 0.25s linear'
                secondDigitTwo.current.style.transform = 'translateY(0)'
                updateSecond()
            }
        }, 500)
    }

    function updateSecond() {
        if (increSecTwo.current == -20 && increSecOne.current != -20) {
            secondDigitTwo.current.style.transition = 'transform 0.5s linear'
            increSecOne.current = increSecOne.current + -10
            count.current = 0
            increSecTwo.current = 0
            secondDigitOne.current.style.transform = `translateY(${increSecOne.current}%)`
        } else if (increSecOne.current == -20) {
            secondDigitOne.current.style.transition = 'transform 0.25s linear'
            secondDigitOne.current.style.transform = 'translateY(0)'
            updateMinute()
        }
    }

    function updateMinute() {
        if (increSecOne.current == -20 && increMinTwo.current != -20) {
            minuteDigitTwo.current.style.transition = 'transform 0.5s linear'
            increMinTwo.current = increMinTwo.current + -10
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            minuteDigitTwo.current.style.transform = `translateY(${increMinTwo.current}%)`
        } else if (increMinTwo.current == -20) {
            minuteDigitTwo.current.style.transition = 'transform 0.25s linear'
            minuteDigitTwo.current.style.transform = 'translateY(0)'
            minuteProgress()
        }
    }

    function minuteProgress() {
        if (increMinTwo.current == -20 && increMinOne.current != -20) {
            minuteDigitTwo.current.style.transition = 'transform 0.5s linear'
            increMinOne.current = increMinOne.current + -10
            minuteDigitOne.current.style.transform = `translateY(${increMinOne.current}%)`
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            increMinTwo.current = 0
        } else if (increMinOne.current == -20) {
            minuteDigitOne.current.style.transition = 'transform 0.25s linear'
            minuteDigitOne.current.style.transform = 'translateY(0)'
            updateHour()
        }
    }

    function updateHour() {
        if (increMinOne.current == -20 && increHourTwo.current != -20) {
            minuteDigitOne.current.style.transition = 'transform 0.5s linear'
            increHourTwo.current = increHourTwo.current + -10
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            increMinTwo.current = 0
            increMinOne.current = 0
            hourDigitTwo.current.style.transform = `translateY(${increHourTwo.current}%)`
        } else if (increHourTwo.current == -20) {
            hourDigitTwo.current.style.transition = 'transform 0.25s linear'
            hourDigitTwo.current.style.transform = 'translateY(0)'
            progressHour()
        }
    }

    function progressHour() {
        if (increHourTwo.current == -20 && increHourOne.current != -20) {
            hourDigitOne.current.style.transition = 'transform 0.5s linear'
            increHourOne.current = increHourOne.current + -10
            hourDigitOne.current.style.transform = `translateY(${increHourOne.current}%)`
            increSecTwo.current = 0
            count.current = 0
            increSecOne.current = 0
            increMinTwo.current = 0
            increMinOne.current = 0
            increHourTwo.current = 0
        } else if (increHourOne.current == -20) {
            hourDigitOne.current.style.transition = 'transform 0.25s linear'
            hourDigitOne.current.style.transform = 'translateY(0)'
            count.current = 0
            increSecTwo.current = 0
            increSecOne.current = 0
            increMinTwo.current = 0
            increMinOne.current = 0
            increHourTwo.current = 0
            increHourOne.current = 0
            startClock()
        }
    }

    return (
        <Container className={classes.container}>
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
    )
}
