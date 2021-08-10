import React from 'react'
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
        alignItems: 'flex-start',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
}))

export default function MainPage() {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Hours />
            <Minutes />
            <Seconds />
        </Container>
    )
}
