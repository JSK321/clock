import React from 'react'
import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        border: 'solid 1px black',
        height: '100vh',
        display: 'flex',
        justifyContent: "space-evenly",
        flexWrap: 'wrap'
    },
    minutesBoxOne: {
        width: 60,
        // height:"50
        color: "blue",
        border: 'solid 1px black',
    },
    minutesBoxTwo: {
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

export default function Minutes() {
    const classes = useStyles()
    return (
        <>
            <div>
                <Box className={classes.minutesBoxOne}>
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
            <div style={{ marginRight: '3rem', marginLeft: "1rem" }}>
                <Box className={classes.minutesBoxTwo}>
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
