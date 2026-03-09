import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requested, setRequested] = useState("");

    function gain() {
        const parsed = parseInt(requested);
        // parseInt returns NaN for empty string or non-numeric input — guard against that
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            {/* type="number" gives this the ARIA role "spinbutton" that the tests look for */}
            <Form.Control
                type="number"
                value={requested}
                onChange={(e) => { setRequested(e.target.value); }}
            />
            {/* disabled when out of attempts */}
            <Button onClick={() => { setAttemptsLeft(attemptsLeft - 1); }} disabled={attemptsLeft === 0}>use</Button>
            <Button onClick={gain}>gain</Button>
        </div>
    );
}
