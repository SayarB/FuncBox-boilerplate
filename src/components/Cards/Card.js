import React from "react";
import "./Card.css";
function Card({ question, getResponse, response, nextQues, prevQues }) {
  return (
    <div className="quiz_container">
      <div className="quiz_card">
        <p className="question_text">{question?.text}</p>
        <div className="options_div">
          {question?.options.map((option) => {
            return (
              <button
                className={`option${
                  response && option.id === response.id ? " selected" : ""
                }`}
                onClick={() => {
                  getResponse(option);
                }}
              >
                {option.text}
              </button>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => prevQues()}>Prev</button>
        <button onClick={() => nextQues()}>Next</button>
      </div>
    </div>
  );
}

export default Card;
