import React, { useState } from 'react'

const Vote = ({text, handleClick, value}) => {
  return (
    <div>
      <p>has {text} votes</p>
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

 
  const [selected, setSelected] = useState(0)
  const [vote, changeVote] = useState(new Array(anecdotes.length).fill(0))
  const changeQuote = () =>  {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdote)
  }
  const voteChange = () => {
    const points = [...vote]
    points[selected] += 1
    changeVote(points)
  }
  const mostVotes = Math.max(...vote);
  const newAnecdote = anecdotes[vote.indexOf(mostVotes)]
  



  return (
    <div>
    <h1>Anecdote of the Day</h1>
    {anecdotes[selected]}
    <Vote  text={vote[selected]}/>
    <Button handleClick={voteChange} text="vote" />
    <Button handleClick={changeQuote} text="next anecdote"/>

    <h1>Anecdote with the most votes</h1>
    {newAnecdote}
    <Vote text={mostVotes}/>

    </div> 
  )
}

export default App
