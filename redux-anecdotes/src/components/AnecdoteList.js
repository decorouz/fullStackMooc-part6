import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { setVoteNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVoting }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes} <button onClick={handleVoting}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter(
      (a) => a.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    )
  )

  const dispatch = useDispatch()

  const vote = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id)

    dispatch(anecdoteVote(id))

    setVoteNotification(dispatch, anecdote.content)
  }

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleVoting={() => vote(anecdote.id)}
          />
        ))}
    </div>
  )
}

export default AnecdoteList
