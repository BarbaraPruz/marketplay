import React from 'react';

import Button from 'react-bootstrap/Button';

function Splash(props) {
    const handleLogin = () => {
        props.history.push('/dashboard')
    }
    return (
        <React.Fragment>
            <h1>Splash</h1>
            <Button onClick={handleLogin}>Start</Button>             
        </React.Fragment>       
    )
}

export default Splash;