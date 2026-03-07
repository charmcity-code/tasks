import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

// WHAT WAS WRONG:
// MoveableBox owned the position state, but ShoveBoxButton had no way to access
// or update it — sibling components can't share each other's local state.
//
// The commented-out code tried two additional broken things:
// 1. Called MoveableBox() as a plain function instead of rendering <MoveableBox />.
//    Calling a component as a function bypasses React's rendering system and
//    means hooks inside it won't work correctly.
// 2. Tried to access box.position and box.setPosition on the returned JSX element,
//    but JSX elements are plain objects — they don't expose state variables.
//
// HOW IT WAS FIXED:
// State was lifted up to ShoveBox (the common parent). position and setPosition
// are passed as props to both ShoveBoxButton and MoveableBox so they share
// the same value. MoveableBox no longer owns its own state.

function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox position={position}></MoveableBox>
            </div>
        </div>
    );
}
