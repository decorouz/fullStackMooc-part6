const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification

    case 'CLEAR_NOTIFICATION':
      return ''

    default:
      return state
  }
}

let timeoutID = 0

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })
    //So notification doesn't repeat in redux store
    if (timeoutID) {
      clearTimeout(timeoutID)
    }

    timeoutID = setTimeout(() => dispatch(clearNotification()), 1000 * time)
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}

export default notificationReducer
