import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎆" | "💝" | "🎃" | "🦃" | "🎄";

// Alphabetical order: Christmas🎄, Halloween🎃, Independence Day🎆, Thanksgiving🦃, Valentine's💝
const nextAlpha: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "💝",
    "💝": "🎄",
};

// Year order: Valentine's💝(Feb), Independence Day🎆(Jul), Halloween🎃(Oct), Thanksgiving🦃(Nov), Christmas🎄(Dec)
const nextYear: Record<Holiday, Holiday> = {
    "💝": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "💝",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");

    return (
        <>
            <div>Holiday: {holiday}</div>
            <Button onClick={() => { setHoliday(nextAlpha[holiday]); }}>
                Advance by Alphabet
            </Button>
            {" "}
            <Button onClick={() => { setHoliday(nextYear[holiday]); }}>
                Advance by Year
            </Button>
        </>
    );
}
