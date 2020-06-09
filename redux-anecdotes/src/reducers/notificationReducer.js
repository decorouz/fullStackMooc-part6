const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_NOTIFY':
      return action.data
    case 'VOTE_NOTIFY':
      return action.data
    case 'HIDE':
      return ''

    default:
      return state
  }
}

const createNotification = (id, content) => {
  return {
    type: 'NEW_NOTIFY',
    id,
    data: `You created '${content}'`,
  }
}

const voteNotification = (id, content) => {
  return {
    type: 'VOTE_NOTIFY',
    id,
    data: `You voted '${content}'`,
  }
}

const hideNotification = (id) => {
  return {
    type: 'HIDE',
    id,
  }
}

let nextNotificationId = 0

export const setCreateNotification = (dispatch, content) => {
  const id = nextNotificationId++

  dispatch(createNotification(id, content))

  setTimeout(() => {
    dispatch(hideNotification(id))
  }, 5000)
}

export const setVoteNotification = (dispatch, content) => {
  const id = nextNotificationId++

  dispatch(voteNotification(id, content))

  setTimeout(() => {
    dispatch(hideNotification(id))
  }, 5000)
}

export default notificationReducer
