import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {/*
                map over the colors array instead of hardcoding each radio button.
                `inline` lays the buttons out horizontally (like the example screenshot).
                Each radio shares the same `name` so only one can be selected at a time.
                The `value` is the color string — the test reads radio.value to check both
                the box's text and its backgroundColor.
            */}
            {COLORS.map((c) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="color"
                    id={`color-${c}`}
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e) => { setColor(e.target.value); }}
                    style={{ backgroundColor: c }}
                />
            ))}

            {/*
                data-testid="colored-box" is required — the test finds this element with getByTestId.
                Text must CONTAIN the color string (toHaveTextContent checks for containment).
                backgroundColor style must equal the color string.
            */}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: color, padding: 8, marginTop: 8, display: "inline-block" }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
