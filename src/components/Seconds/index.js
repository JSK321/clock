import React, { useRef, useEffect } from 'react'
import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    secondsBoxOne: {
        width: 60,
        color: "blue",
        transition: "transform 1s linear"
        // border: 'solid 1px black',

    },
    secondsBoxTwo: {
        width: 60,
        // height:"50
        color: "blue",
        transition: "transform 1s linear",
        border: 'solid 1px black',
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
    }
}))

export default function Seconds(props) {
    const classes = useStyles()
    
    return (
        <>
            <Box
                className={classes.secondsBoxOne}
                ref={props.secondDigitTwo}
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
                ref={props.secondDigitOne}
                style={{ marginLeft: "1.5rem" }}
            >
                <div className={classes.timeDigits}>
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
                <div className={classes.timeDigits}>
                    9
                </div>
            </Box>
        </>
    )
}
