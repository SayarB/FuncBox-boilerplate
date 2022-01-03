import React, { useState, useEffect } from "react";
import { getQuestions } from "../../utils/utils";
import Card from "../Cards/Card";
import { Link } from "react-router-dom";
function Quiz() {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
  );
}

export default Quiz;
