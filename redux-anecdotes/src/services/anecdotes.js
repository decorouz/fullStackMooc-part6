import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (object) => {
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateVote = async (toUpdate) => {
  const id = toUpdate.id
  const votedAnecdote = { ...toUpdate, votes: toUpdate.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, votedAnecdote)
  return response.data
}
export default { getAll, createNew, updateVote }
