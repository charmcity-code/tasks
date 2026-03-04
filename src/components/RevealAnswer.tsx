import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                Reveal Answer
            </Button>
            {isVisible && <div>42</div>}
        </>
    );
}
