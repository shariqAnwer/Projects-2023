import './App.css';

import { useState } from 'react';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
    margin: '18vh auto',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '19px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '15px',
    fontSize: '24px',
  },
};

function App() {
  const [currQuestionIdx, seCurrQuestionIdx] = useState(0)
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('')
  const [selected, setSelected] = useState(null)
  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const handleAns = (selectedOption) => {
    //console.log(selectedOption)
    setSelected(selectedOption)
  }

  const handleSubmit = () => {
  // console.log(selected)
    const currQuestion = questions[currQuestionIdx];
    let updatedScore = score;
      if(selected === currQuestion.correct) {
        updatedScore += 1;
        setScore(updatedScore)
        setFeedback('Correct!')
      }else {
        setFeedback('InCorrect!')
      }

      if(currQuestionIdx < questions.length - 1) {
        seCurrQuestionIdx(currQuestionIdx + 1)
      }else {
        console.log("score: " + score)
        setFeedback(`Quiz Complete! You scored ${updatedScore} out of ${questions.length}`)
      }

  }


// console.log("select",selected)
  return (
    <div style={style.container} className='App-header' >
      <div id="question" style={style.question}>{`Q${currQuestionIdx+1}: ${questions[currQuestionIdx].question}`}</div>
      <div style={style.options}>
      {questions[currQuestionIdx].options.map((option, idx)=> (
        <label key={idx} style={{display:'block'}}>
          <input type="radio" name="option" value={option} id={`option${idx+1}`} onChange={() => handleAns(option)}/>
          {option}
        </label>
      ))}
      </div>
      <button style={style.button} id="submitBtn" onClick = {() => handleSubmit()}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}>{feedback}</div>
    </div>
  );
}

export default App;




