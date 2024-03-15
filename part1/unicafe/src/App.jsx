import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr><td>{props.text}</td><td>{props.value} {props.unit}</td></tr>
)

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  const average = (props.good - props.bad)/all
  const positive = props.good/all
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <StatisticLine text="good" value={props.good} unit="" />
      <StatisticLine text="neutral" value={props.neutral} unit="" />
      <StatisticLine text="bad" value={props.bad} unit="" />
      <StatisticLine text="all" value={all} unit="" />
      <StatisticLine text="average" value={average} unit="" />
      <StatisticLine text="positive" value={positive*100} unit="%" />
    </table>
  )
}

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App