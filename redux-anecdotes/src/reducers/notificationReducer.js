const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_CREATED':
      return action.data
    case 'VOTED':
      return action.data
    case 'HIDE':
      return ''

    default:
      return state
  }
}

const createNotification = (id, content) => {
  return {
    type: 'NEW_CREATED',
    id,
    data: `You created '${content}'`,
  }
}

const voteNotification = (id, content) => {
  return {
    type: 'VOTED',
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
