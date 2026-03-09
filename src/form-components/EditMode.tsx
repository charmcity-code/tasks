import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // Three pieces of state: whether we're editing, the name, and student status
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name"); // initial value must be exactly "Your Name"
    const [isStudent, setIsStudent] = useState(true); // initially IS a student

    return (
        <div>
            <h3>Edit Mode</h3>

            {/*
                Form.Check type="switch" is the Bootstrap switch component.
                Under the hood it renders type="checkbox" on the input (no role="switch" added),
                so getByRole("checkbox") in the tests still finds it.
                The wrapper div automatically gets className="form-check form-switch",
                which satisfies the test: switchButton.parentElement.toHaveClass("form-switch")
            */}
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e) => { setEditMode(e.target.checked); }}
            />

            {/* Conditional rendering: show the form in edit mode, show text otherwise */}
            {editMode ? (
                <div>
                    {/* Form.Control defaults to type="text", giving ARIA role "textbox" */}
                    <Form.Control
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                    />
                    {/*
                        Form.Check type="checkbox" — the label text "student" lets the test
                        find it by accessible name: getByRole("checkbox", { name: /student/i })
                    */}
                    <Form.Check
                        type="checkbox"
                        id="isStudentCheck"
                        label="student"
                        checked={isStudent}
                        onChange={(e) => { setIsStudent(e.target.checked); }}
                    />
                </div>
            ) : (
                // Ternary inside the string to insert "not " only when isStudent is false
                <p>{name} is {isStudent ? "" : "not "}a student</p>
            )}
        </div>
    );
}
