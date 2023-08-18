const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1'

  const _fetchWithAuth = async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  }

  const putAccessToken = (token) => {
    localStorage.setItem('accessToken', token)
  }

  const getAccessToken = () => {
    return localStorage.getItem('accessToken')
  }

  const register = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const responseJson = await response.json()
    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { user },
    } = responseJson

    return user
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { token },
    } = responseJson

    return token
  }

  const getOwnProfile = async () => {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { user },
    } = responseJson

    return user
  }

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { users },
    } = responseJson

    return users
  }

  const getAllDiscussions = async () => {
    const response = await fetch(`${BASE_URL}/threads`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { threads },
    } = responseJson

    return threads
  }

  const getThreadDetail = async (id) => {
    const response = await fetch(`${BASE_URL}/threads/${id}`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { detailThread },
    } = responseJson

    return detailThread
  }

  const createThread = async ({ title, body, category = '' }) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { thread },
    } = responseJson

    return thread
  }

  const createThreadComment = async ({ id, content }) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { comment },
    } = responseJson

    return comment
  }

  const upVoteThread = async (id) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote },
    } = responseJson

    return vote
  }

  const downVoteThread = async (id) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote },
    } = responseJson

    return vote
  }

  const neutralizeVoteThread = async (id) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote },
    } = responseJson

    return vote
  }

  const upVoteComment = async ({ threadId, commentId }) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote },
    } = responseJson

    return vote
  }

  const downVoteComment = async ({ threadId, commentId }) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote },
    } = responseJson

    return vote
  }

  const neutralizeVoteComment = async ({ threadId, commentId }) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote },
    } = responseJson

    return vote
  }

  const getLeaderboards = async () => {
    const response = await fetch(`${BASE_URL}/leaderboards`, {
      method: 'GET',
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { leaderboards },
    } = responseJson

    return leaderboards
  }

  return {
    putAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllDiscussions,
    getThreadDetail,
    createThread,
    createThreadComment,
    upVoteThread,
    downVoteThread,
    neutralizeVoteThread,
    upVoteComment,
    downVoteComment,
    neutralizeVoteComment,
    getLeaderboards,
  }
})()

export default api
