import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    return (
        <>
            <Button
                onClick={() => {
                    setQuestionType(
                        questionType === "short_answer_question" ?
                            "multiple_choice_question"
                        :   "short_answer_question",
                    );
                }}
            >
                Change Type
            </Button>
            {questionType === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </>
    );
}
