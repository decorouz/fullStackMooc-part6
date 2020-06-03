const notificationReducer = (state = 'initial notification', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification

    default:
      return state
  }
}

// Action creator for the new functionality

export const setNotification = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification,
  }
}

export default notificationReducer
