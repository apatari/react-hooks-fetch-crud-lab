import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";



function QuestionList({ questions, setQuestions }) {

  function handleDeleteQuestion(id) {
    const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions)
    
  }

  function handleUpdateQuestion(updatedQuestion) {
    const newQuestions = questions.map(question => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      }
      return question
    })
    setQuestions(newQuestions)
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem 
          question={question} 
          key={question.id} 
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion} />
      })}</ul>
    </section>
  );
}

export default QuestionList;
