import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// WHAT WAS WRONG:
// colorIndex state was owned by ChangeColor, but ColorPreview and the text in
// ColoredBox always read DEFAULT_COLOR_INDEX (a constant that never changes).
// The button updated state inside ChangeColor, but nothing else could see it —
// sibling and parent components have no access to a child's local state.
//
// HOW IT WAS FIXED:
// State was lifted up to ColoredBox, which is the common parent of both children.
// colorIndex and setColorIndex are passed down as props so all three parts
// (text, button, preview box) stay in sync with the same piece of state.

function ChangeColor({
    colorIndex,
    setColorIndex,
}: {
    colorIndex: number;
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
