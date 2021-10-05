import React, { useRef, useEffect } from 'react'
import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    secondsBoxOne: {
        width: 60,
        color: "#262626",
        transition: "transform 0.5s linear",
        marginTop: '6.5rem',
        userSelect: 'none',
        border: 'solid 1px black',
        boxShadow: '4px 4px #595959, -4px -4px #A6A6A6',
        clipPath: 'inset(-5px -5px -5px -5px)',
        '@media (max-width: 420px)': {
            width: 40,
        },
    },
    secondsBoxTwo: {
        width: 60,
        color: "#262626",
        transition: "transform 0.5s linear",
        marginTop: '15rem',
        marginLeft: "1.5rem",
        userSelect: 'none',
        border: 'solid 1px black',
        boxShadow: '4px 4px #595959, -4px -4px #A6A6A6',
        '@media (max-width: 420px)': {
            width: 40,
            marginRight: '1rem',
            marginLeft: '.75rem',
        },
    },
    timeDigits: {
        fontSize: 30,
        display: "flex",
        width: '100%',
        justifyContent: 'center',
    },
}))

export default function Seconds(props) {
    const classes = useStyles()

    return (
        <>
            <div ref={props.squareSecTwo} className="squareSecTwo" />
            <div ref={props.squareSecOne} className="squareSecOne" />
            <Box
                className={classes.secondsBoxOne}
                ref={props.secondDigitOne}
            >
                <div
                    className={classes.timeDigits}
                >
                    0
                </div>
                <div
                    className={classes.timeDigits}
                >
                    1
                </div>
                <div
                    className={classes.timeDigits}
                >
                    2
                </div>
                <div
                    className={classes.timeDigits}
                >
                    3
                </div>
                <div
                    className={classes.timeDigits}
                >
                    4
                </div>
                <div
                    className={classes.timeDigits}
                >
                    5
                </div>
            </Box>
            <Box
                className={classes.secondsBoxTwo}
                ref={props.secondDigitTwo}
            >
                <div
                    className={classes.timeDigits}
                >
                    0
                </div>
                <div className={classes.timeDigits}>
                    1
                </div>
                <div className={classes.timeDigits}>
                    2
                </div>
                <div className={classes.timeDigits}>
                    3
                </div>
                <div className={classes.timeDigits}>
                    4
                </div>
                <div className={classes.timeDigits}>
                    5
                </div>
                <div className={classes.timeDigits}>
                    6
                </div>
                <div className={classes.timeDigits}>
                    7
                </div>
                <div className={classes.timeDigits}>
                    8
                </div>
                <div
                    className={classes.timeDigits}
                >
                    9
                </div>
            </Box>
        </>
    )
}
