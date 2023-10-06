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

  const [set, setSet] = useState(data);
  const [text, setText] = useState({value: ""});
  const [correct, setCorrect] = useState("");
  const [card, setCard] = useState(set[0]);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  }

  const shuffle = (array) => {

    return array.sort(() => Math.random() - 0.5);

  }

  const handleNext = () => {

    setCard(data[(data.indexOf(card) + 1) > 8 ? 0 : data.indexOf(card) + 1]);

    setCorrect("");

    setText({value: ""});

    setFlipped(false);

  }

  const handleBack = () => {

    setCard(data[(data.indexOf(card) - 1) < 0 ? 8 : data.indexOf(card) - 1]);

    setCorrect("");

    setText({value: ""});

    setFlipped(false);

  }

  const handleAnswer = () => {

    if(card.answer == text) {
      setCorrect("correct");
    }
    else {
      setCorrect("wrong");
    }
    
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>Ultimate Army Quiz!</h2>
        <h4>Do you know BTS as much as you think you do? Test it here with BTS quiz!</h4>
        <h5>Number of Cards: 10</h5>
        <br />
        <Card question={card.question} answer={card.answer} difficulty={card.difficulty} flipped={flipped} onClick={() => handleFlip()} />
        
        <div>
          Guess the answer: 
          <input className={'' + correct} placeholder='Enter answer here...' type='text' name='answer' value={text.value} onChange={(e) => setText(e.target.value)} />
          <button className='btn' type='submit' value='Submit' onClick={() => handleAnswer()}>Submit Guess</button>
        </div>
        
        <button className='btn' onClick={() => handleBack()} >⭠</button>
        <button className='btn' onClick={() => handleNext()} >⭢</button>
        <button className='btn' onClick={() => setSet(shuffle(set))} >Shuffle Cards</button>
      </div>
    </div>
  )
}

export default App


