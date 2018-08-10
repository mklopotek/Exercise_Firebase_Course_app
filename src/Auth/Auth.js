import React from 'react'
import LoginForm from './LoginForm'
import { database, auth, googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isLogIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ isLogIn: true })
                const dataUser = {
                    email: user.email,
                    date: Date.now()
                }
                database.ref('/login-counter').push(dataUser)
            } else {
                this.setState({ isLogIn: false })
            }
        })
    }

    onLogInClikHandler() {
        auth.signInWithPopup(googleProvider)
            .catch((error) => alert('Błąd logowania'))
    }

    render() {
        return (
            this.state.isLogIn ?
                <div>
                    {this.props.children}
                </div>
                :
                <LoginForm
                    onLogInClikHandler={this.onLogInClikHandler}
                />
        )
    }
}

export default Auth