import './App.css';
import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  return (
    <div>
        <tr>
          <td>
            {text}
          </td>
          <td>
            {value}
          </td>
        </tr>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
const all = good + neutral + bad;
const average = (good + neutral + bad) / 3;
const positive = (good / all) * 100;

  if (good === 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  } else {
    return (
      <div>
      <table>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="all" value ={all} />
      <Statistic text="average" value ={average} />
      <Statistic text="positive" value ={`${positive} %`} />
      </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const setValueGood = () => {
  setGood(good+1)
}
const setValueNeutral = () => {
  setNeutral(neutral+1)
}
const setValueBad = () => {
  setBad(bad+1)
}

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setValueGood} text= "good" />
      <Button handleClick={setValueNeutral} text="neutral" />
      <Button handleClick={(setValueBad)} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App;