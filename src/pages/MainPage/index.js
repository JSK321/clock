import React, { useState, useEffect } from 'react'
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

    const [secTimer, setSecTimer] = useState(0)
    const secDigOne = document.getElementById("secDigitOne")

    useEffect(() => {
        // console.log(secTimer)
        const timer = setInterval(() => {
            // setSecTimer((prevTime) => (prevTime <= 9 ? prevTime + 1: prevTime))
            // if(secTimer < 9) {
            //     setSecTimer(secTimer + 1)
            // } 
            // else if(secTimer == 9) {
            //     clearInterval(timer)
            // }
        }, 1000)
    }, [])

    return (
        <Container className={classes.container}>
            <Hours />
            <Minutes />
            <Seconds />
        </Container>
    )
}
