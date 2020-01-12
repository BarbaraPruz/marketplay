import React from 'react';

import Button from 'react-bootstrap/Button';

function Dashboard(props) {

    const playGame = () => {
        props.history.push('/game')
    }

    return (
        <React.Fragment>
            <h1>Dashboard</h1>  
            <Button onClick={playGame}>Play</Button>
        </React.Fragment> 
    )
}

export default Dashboard;