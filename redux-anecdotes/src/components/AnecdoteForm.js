import React from 'react'
import anecdoteServices from '../services/anecdotes'
import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setCreateNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addNewAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value

    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteServices.createNew(content)

    dispatch(createNewAnecdote(newAnecdote))

    setCreateNotification(dispatch, content)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
