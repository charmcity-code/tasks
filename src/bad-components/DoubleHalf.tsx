import React, { useState } from "react";
import { Button } from "react-bootstrap";

// WHAT WAS WRONG:
// The original code imported `dhValue` and `setDhValue` from a separate file
// called DoubleHalfState.tsx. That file contained this line at the top level:
//
//   export const [dhValue, setDhValue] = useState<number>(10);
//
// This crashes because useState is a React Hook, and hooks can ONLY be called
// inside a React component function. Calling useState at the module/file level
// (outside any component) breaks React's rules of hooks and causes a runtime error.
//
// HOW IT WAS FIXED:
// DoubleHalfState.tsx was deleted entirely — it had no valid purpose.
// The useState call was moved into the DoubleHalf component where it belongs.
// Doubler and Halver receive setValue as a prop so they can update
// the state that lives in the parent DoubleHalf component.
// Passing the setter down as a prop is the standard way to let child
// components trigger a state change owned by their parent.

function Doubler({
    setValue,
}: {
    // The setter from useState expects either a new value or an updater
    // function. Using the updater form `(v) => 2 * v` is safer because
    // it always works off the latest state, even in async situations.
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((v) => 2 * v);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    setValue,
}: {
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((v) => 0.5 * v);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    // useState is called here, inside a component — this is the only place
    // it is allowed. It returns the current value and a setter function.
    // The initial value is 10.
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/* setDhValue is passed as a prop so each button can update the shared state */}
            <Doubler setValue={setDhValue}></Doubler>
            <Halver setValue={setDhValue}></Halver>
        </div>
    );
}
