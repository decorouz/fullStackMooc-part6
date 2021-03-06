import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE_INCREMENT':
      const id = action.data.id

      return state.map((anecdote) =>
        anecdote.id !== id
          ? anecdote
          : {
              ...anecdote,
              votes: anecdote.votes + 1,
            }
      )

    case 'NEW_ANECDOTE':
      return [...state, action.data]

    default:
      return state
  }
}

// const getId = () => (100000 * Math.random()).toFixed(0)
//Create an action created for voting

// export const initializeAnecdote = (anecdotes) => {
//   return {
//     type: 'INIT_ANECDOTES',
//     data: anecdotes,
//   }
// }

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createNewAnecdote = (data) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

// export const anecdoteVote = (id) => {
//   return {
//     type: 'VOTE_INCREMENT',
//     data: { id },
//   }
// }

export const anecdoteVote = (toUpdate) => {
  return async (dispatch) => {
    const updatedItem = await anecdoteService.updateVote(toUpdate)
    dispatch({
      type: 'VOTE_INCREMENT',
      data: updatedItem,
    })
  }
}

export default reducer
