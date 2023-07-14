// This page will submit the questions to DB
// Has a Question input field
// Has an Answer input field
// Submit button
// Couple of parameters to select from Section, Category, Topic, Language
// Below that a container shows a list of last submitted Questions

import QuestionTypeSelection from "./QuestionTypeSelection";
import Last10Questions from "./Last10Questions";
import './QuestionSubmitPage.css';

export default function QuestionSubmitPage() {
    return (
        <>
            <h1>Frontend Interview Questions Bank</h1>
            <hr></hr>
            <input type="text" id="question-input"></input>
            <label for="question-input">:Q</label>
            <br></br>
            <br></br>
            <input type="text" id="answer-input"></input>
            <label for="answer-input">:Ans</label>
            <br></br>
            <button id="question-submit-button">Submit</button>
            <br></br>
            <QuestionTypeSelection name="Section" />
            <QuestionTypeSelection name="Categroy" />
            <QuestionTypeSelection name="Topic" />
            <QuestionTypeSelection name="Language" />
            <br></br>
            <Last10Questions />
        </>
    );
}
