import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // Initial value is the first element of the options list
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            {/*
                Form.Select renders as a <select> element with ARIA role "combobox"
                (that's what the test looks for with getByRole("combobox"))
            */}
            <Form.Select
                value={selected}
                onChange={(e) => { setSelected(e.target.value); }}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </Form.Select>
            {/* Same ternary pattern as CheckAnswer */}
            <span>{selected === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
