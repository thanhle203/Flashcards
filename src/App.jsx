/* eslint-disable no-unused-vars */
import './App.css';
import Card from './card';

const data = [
  {
    id: 1,
    question: "Testing?",
    answer: "testing",
  },
]

const App = () => {

  const { quiz } = data;

  return (
    <div className="App">
      <div className='container'>
        <h2>Ultimate Army Quiz!</h2>
        <h4>Do you know BTS as much as you think you do? Test it here with BTS quiz!</h4>
        <h5>Number of Cards: 10</h5>
        <br />
        <Card />
        <button className='next'>⭢</button>
      </div>
    </div>
  )
}

export default App


