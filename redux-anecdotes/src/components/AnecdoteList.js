import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleVoting }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVoting}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleVoting={() => dispatch(voting(anecdote.id))}
          />
        ))}
    </div>
  )
}

export default AnecdoteList
