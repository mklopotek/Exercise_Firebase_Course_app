import React from 'react'

class UserRandom extends React.Component {
    state = {
        userArray: null
    }

    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(data => this.setState({ userArray: data.results }))
    }

    render() {
        return (
            <div>
                {
                    this.state.userArray && this.state.userArray.map(user =>
                        <div key={user.login.uuid}>
                            <div>{user.name.first}</div>
                            <img src={user.picture.medium} />
                        </div>
                    )
                }
            </div>
        )
    }
}

export default UserRandom