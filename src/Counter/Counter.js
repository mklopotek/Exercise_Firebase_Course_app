import React from 'react'
import { database } from '../firebaseConfig'
import { Link } from 'react-router-dom'

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
                <Link to={'/random-users'}> Generate your random users! </Link>
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