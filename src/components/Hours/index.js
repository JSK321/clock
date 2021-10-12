import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    hoursBoxOne: {
        width: 60,
        color: "#262626",
        transition: "transform 0.5s linear",
        userSelect: 'none',
        border: '1px solid black',
        boxShadow: '4px 4px #595959, -4px -4px #A6A6A6',
        '@media (max-width: 575px)': {
            width: 55,
        },
        '@media (max-width: 505px)': {
            width: 50,
        },
        '@media (max-width: 430px)': {
            width: 40,
        }
    },
    hoursBoxTwo: {
        width: 60,
        color: "#262626",
        transition: "transform 0.5s linear",
        marginTop: '15rem',
        marginRight: '3rem',
        marginLeft: "1.5rem",
        userSelect: 'none',
        border: 'solid 1px black',
        boxShadow: '4px 4px #595959, -4px -4px #A6A6A6',
        '@media (max-width: 575px)': {
            width: 55,
            marginLeft: '1rem',
            marginRight: '2.5rem'
        },
        '@media (max-width: 505px)': {
            width: 47,
            marginRight: '1.5rem'
        },
        '@media (max-width: 430px)': {
            width: 40,
            marginRight: '1rem',
            marginLeft: '.75rem',
            marginTop: '15rem',
        }
    },
    timeDigits: {
        fontSize: 30,
        display: "flex",
        width: '100%',
        justifyContent: 'center',
    },
}))

export default function Hours(props) {
    const classes = useStyles()

    return (
        <>
            <div ref={props.squareHourTwo} className="squareHourTwo" />
            <div ref={props.squareHourOne} className="squareHourOne" />
            <Box
                className={classes.hoursBoxOne}
                ref={props.hourDigitOne}
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
            </Box>
            <Box
                className={classes.hoursBoxTwo}
                ref={props.hourDigitTwo}
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
