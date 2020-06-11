import React from 'react'
import { connect } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addNewAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    const newObject = { content, votes: 0 }

    event.target.anecdote.value = ''

    props.createNewAnecdote(newObject)
    props.setNotification(`new anecdote '${content}'`, 10)
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

export default connect(null, { createNewAnecdote, setNotification })(
  AnecdoteForm
)
