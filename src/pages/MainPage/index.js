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
    const incrementOne = useRef(0)
    const incrementTwo = useRef(0)
    // Minutes Timer
    
    // Seconds Timer
    const secondDigitOne = useRef()
    const secondDigitTwo = useRef()

    useEffect(() => {
        startClock()
    }, [])

    function startClock() {
        const timer = setInterval(() => {
            if (count.current < 2) {
                count.current = count.current + 1
                incrementOne.current = incrementOne.current + -10
                secondDigitOne.current.style.transform = `translateY(${incrementOne.current}%)`
            } else if (count.current == 2) {
                secondDigitOne.current.style.transform = 'translateY(0)'
                updateSecond()
                // count.current = 0
                // incrementOne.current = 0
                // clearInterval(timer)
            }
        }, 1000)
    }

    function updateSecond() {
        if (count.current == 2 && incrementTwo.current != -20) {
            incrementTwo.current = incrementTwo.current + -10
            count.current = 0
            incrementOne.current = 0
            secondDigitTwo.current.style.transform = `translateY(${incrementTwo.current}%)`
        } else if (incrementTwo.current == -20) {
            secondDigitTwo.current.style.transform = 'translateY(0)'
            incrementTwo.current = 0
            count.current = 0
            incrementOne.current = 0
        }
    }

    return (
        <Container className={classes.container}>
            <Hours />
            <Minutes />
            <Seconds
                secondDigitOne={secondDigitOne}
                secondDigitTwo={secondDigitTwo}
            />
        </Container>
    )
}
