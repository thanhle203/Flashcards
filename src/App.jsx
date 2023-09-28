/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Card from './card';

const data = [
  {
    id: 1,
    question: "Who is the leader of BTS?",
    answer: "RM",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "How many members are there in BTS?",
    answer: "Seven",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What's the name of BTS fandom?",
    answer: "Army",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "What color does BTS use for their fandom?",
    answer: "Purple",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "What year did BTS debut?",
    answer: "2013",
    difficulty: "medium",
  },
  {
    id: 6,
    question: "Who is the youngest in BTS?",
    answer: "Jeon Jungkook",
    difficulty: "medium",
  },
  {
    id: 7,
    question: "Who sang the song, 'Set Me Free', on their solo album?",
    answer: "Park Jimin",
    difficulty: "hard",
  },
  {
    id: 8,
    question: "Who was born on September 1st, 1997?",
    answer: "Jeon Jungkook",
    difficulty: "hard",
  },
  {
    id: 9,
    question: "Which member has a dog named Tan?",
    answer: "V",
    difficulty: "hard",
  },
]

const App = () => {

  const [question, setQuestion] = useState(data[0].question);
  const [answer, setAnswer] = useState(data[0].answer);
  const [difficulty, setDifficulty] = useState(data[0].difficulty);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  }

  const handleNext = () => {
    const num = Math.floor(Math.random() * 9 + 1);

    setQuestion(data[num].question);
    setAnswer(data[num].answer);
    setDifficulty(data[num].difficulty);

    setFlipped(false);

  }

  return (
    <div className="App">
      <div className='container'>
        <h2>Ultimate Army Quiz!</h2>
        <h4>Do you know BTS as much as you think you do? Test it here with BTS quiz!</h4>
        <h5>Number of Cards: 10</h5>
        <br />
        <Card question={question} answer={answer} difficulty={difficulty} flipped={flipped} onClick={() => handleFlip()} />
        <button className='next' onClick={() => handleNext()} >⭢</button>
      </div>
    </div>
  )
}

export default App


