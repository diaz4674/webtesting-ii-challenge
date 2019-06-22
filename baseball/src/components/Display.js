import React,{useState} from 'react'
import Dashboard from './Dashboard';

const Display = props => {
    const [balls, setBalls] = useState(0)
    const [strikes, setStrikes] = useState(0)

    const hit = () => {
        setBalls({balls: 0})
        setStrikes({strikes: 0})
    }

    const strike = () => {
        if(strikes < 2) {
            setStrikes({strikes: strikes +1})
        } else {
            setBalls({balls: 0})
            setStrikes({strikes: 0})
        }
    }

    const foul = () => {
        if(strikes < 2) {
            setStrikes({strikes: strikes +1})
        }
    }

    const ball = () => {
        if(balls < 3) {
            setBalls({balls: balls + 1})
        } else {
            setBalls({balls: 0})
            setStrikes({strikes: 0})
        }
    }

    return (
        <>
            <h1> Count</h1>
            <div>
                <h2 data-testid='balls'>Balls: {balls}</h2>
                <h2  data-testid='strikes'>Strikes: {strikes}</h2>
            </div>
            <Dashboard 
                hit = {hit}           
                strike={strike}
                foul={foul}
                ball={ball} />
            </>
    )
    }

    export default Display;