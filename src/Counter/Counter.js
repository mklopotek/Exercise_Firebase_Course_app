import React from 'react'
import { database } from '../firebaseConfig'

class Counter extends React.Component {
    state = { number: 0 }

    componentDidMount () {
        database.ref('/counter').on('value', snapshot => this.setState(snapshot.val()))
    }

    plusHandler = () => {
        const newNumber = { number: this.state.number + 1 }
        database.ref('/counter').set(newNumber)
    }

    minusHandler = () => {
        const newNumber = { number: this.state.number + 1 }
        database.ref('/counter').set(newNumber)
    }

    resetHandler = () => {
        const newNumber = { number: 0}
        database.ref('/counter').set(newNumber)
    }

    componentWillUnmount = () => {
        database.ref('/counter').off()
    }

    render() {

        return (
            <div>
                <div>{this.state.number}</div>

                <button
                    onClick={this.minusHandler}
                >
                    -1
                </button>

                <button
                    onClick={this.plusHandler}
                >
                    + 1
                </button>
                <div>
                    <button
                    onClick={this.resetHandler}
                    >
                        RESET
                    </button>
                </div>
            </div>
        )

    }

}


export default Counter