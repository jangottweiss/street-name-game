import React from 'react';
import Button from '@material-ui/core/Button';

const gameMode = [
    {
        id: 'guessName',
        name: 'Guess the Street Name',
    },
    {
        id: 'guessStreet',
        name: 'Guess the Street Location'
    }
]


export default function GameModeSelection() {
    const gameModeSelected = (gameModeId: string) => {

    }

    return (
        <div>
            {
                gameMode.map((mode: { name: string; id: string; }) => (
                    <Button
                        onClick={() => gameModeSelected(mode.id)}
                        variant="contained">
                        {mode.name}
                    </Button>
                ))
            }
        </div>
    );
}
