import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            {/* Form.Control with no type defaults to type="text", giving ARIA role "textbox" */}
            <Form.Control
                value={givenAnswer}
                onChange={(e) => { setGivenAnswer(e.target.value); }}
            />
            <span>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
