import React from 'react'
import { connect } from 'react-redux'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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
  // const anecdotes = useSelector((state) =>
  //   state.anecdotes.filter(
  //     (a) => a.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
  //   )
  // )

  // const vote = (anecdote) => {
  //   dispatch(anecdoteVote(anecdote))
  //   dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  // }

  const vote = (anecdote) => {
    props.anecdoteVote(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {props.anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleVoting={() => vote(anecdote)}
          />
        ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)

  if (state.filter) {
    return {
      anecdotes: state.anecdotes.filter(
        (a) =>
          a.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
      ),
    }
  }

  return {
    anecdotes: state.anecdotes,
  }
}

const connectedAnecdoteList = connect(mapStateToProps, {
  anecdoteVote,
  setNotification,
})(AnecdoteList)

export default connectedAnecdoteList
