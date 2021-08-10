import React from 'react'
import { Container, Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    secondsBoxOne: {
        width: 60,
        // height:"50
        color: "blue",
        border: 'solid 1px black',
    },
    secondsBoxTwo: {
        width: 60,
        // height:"50
        color: "blue",
        border: 'solid 1px black',
    },
    timeDigits: {
        fontSize: 30,
        display: "flex",
        width: '100%',
        justifyContent: 'center',
        border: '1px solid black'
    }
}))

export default function Seconds() {
    const classes = useStyles()

    return (
        <>
            <div>
                <Box className={classes.secondsBoxOne}>
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
                </Box>
            </div>
            <div style={{marginLeft: "1rem" }}>
                <Box className={classes.secondsBoxTwo}>
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
            </div>
        </>
    )
}
