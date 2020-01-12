import React from 'react';

import Button from 'react-bootstrap/Button';

function Game(props) {

    const quitGame = () => {
        props.history.push('/dashboard')
    }
    
    return (
        <React.Fragment>
            <h1>Game</h1>  
            <Button onClick={quitGame}>Quit</Button>
        </React.Fragment>       
    )
}

export default Game;