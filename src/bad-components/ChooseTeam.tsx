import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const allOptions = PEOPLE;
    const [team, setTeam] = useState<string[]>([]);

    // WHAT WAS WRONG (chooseMember):
    // 1. The function had no parameter, so it had no way to know which person to add.
    // 2. The body was commented out and used team.push() — mutating state directly
    //    does NOT trigger a re-render. You must always use the setter (setTeam).
    //
    // HOW IT WAS FIXED:
    // Added `newMember: string` as a parameter so each button can pass its person.
    // Replaced push() with setTeam(), spreading the existing team into a new array
    // and appending newMember — this gives React a brand new array to detect the change.
    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    // WHAT WAS WRONG (clearTeam):
    // `team = []` tries to reassign a const variable declared by useState — this
    // is both a JS error and bypasses React's state system entirely.
    //
    // HOW IT WAS FIXED:
    // Call setTeam([]) to tell React the new state is an empty array.
    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            {/* onClick must be an arrow function that calls chooseMember(option)
                                so the specific person's name is passed when the button is clicked.
                                Writing onClick={chooseMember} (without the arrow) would pass the
                                click event object as the argument instead of the person's name. */}
                            <Button onClick={() => { chooseMember(option); }} size="sm">
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
