import React from 'react'

const LoginForm = (props) => (
    <div>
        <button
            onClick={props.onLogInClikHandler}
        >
            Log in by Google!
        </button>
    </div>
)

export default LoginForm