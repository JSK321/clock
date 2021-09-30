import React, { useRef, useEffect } from 'react'
import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    secondsBoxOne: {
        width: 60,
        color: "blue",
        transition: "transform 0.5s linear",
        marginTop: '15rem',
        '@media (max-width: 400px)': {
            width: 40,
            marginTop: '15rem',
        }
    },
    secondsBoxTwo: {
        width: 60,
        color: "blue",
        transition: "transform 0.5s linear",
        marginTop: '15rem',
        marginLeft: "1.5rem",
        border: 'solid 1px black',
        '@media (max-width: 400px)': {
            width: 40,
            marginRight: '1rem',
            marginLeft: '.5rem',
            marginTop: '15rem',
        }
    },
    timeDigits: {
        fontSize: 30,
        display: "flex",
        width: '100%',
        justifyContent: 'center',
    },
    hiddenDigits: {
        visibility: "hidden",
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
                    style={{
                        borderTop: "1px solid black",
                        borderRight: "1px solid black",
                        borderLeft: "1px solid black",
                    }}
                >
                    0
                </div>
                <div
                    className={classes.timeDigits}
                    style={{
                        borderRight: "1px solid black",
                        borderLeft: "1px solid black",
                    }}
                >
                    1
                </div>
                <div
                    className={classes.timeDigits}
                    style={{
                        borderRight: "1px solid black",
                        borderLeft: "1px solid black",
                    }}
                >
                    2
                </div>
                <div
                    className={classes.timeDigits}
                    style={{
                        borderRight: "1px solid black",
                        borderLeft: "1px solid black",
                    }}
                >
                    3
                </div>
                <div
                    className={classes.timeDigits}
                    style={{
                        borderRight: "1px solid black",
                        borderLeft: "1px solid black",
                    }}
                >
                    4
                </div>
                <div
                    className={classes.timeDigits}
                    style={{
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                        borderLeft: "1px solid black",
                    }}
                >
                    5
                </div>
                <div className={classes.hiddenDigits}>
                    6
                </div>
                <div className={classes.hiddenDigits}>
                    7
                </div>
                <div className={classes.hiddenDigits}>
                    8
                </div>
                <div className={classes.hiddenDigits}>
                    9
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
