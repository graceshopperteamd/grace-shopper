import axios from 'axios'

const dummyData = [
  {
    id: 1,
    username: 'Ben',
    email: 'ben@gmail.com',
    password: '123'
  },
  {
    id: 2,
    username: 'Jess',
    email: 'jess@gmail.com',
    password: '123'
  },
  {
    id: 3,
    username: 'Ko',
    email: 'ko@gmail.com',
    password: '123'
  }
]

const GET_USERS = 'GET_USERS'
const GET_USER = 'GET_USER'

const gotUsers = users => {
  return {
    type: GET_USERS,
    users
  }
}

const gotUser = user => {
  return {
    type: GET_USER,
    user
  }
}

export const fetchUsers = () => {
  return dispatch => {
    dispatch(gotUsers(dummyData))
  }
}

export const fetchUser = id => {
  return dispatch => {
    dispatch(gotUser(dummyData[2]))
  }
}

const initialState = {
  user: {}
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS: {
      return {...state, users: action.users}
    }
    case GET_USER: {
      return {...state, user: action.user}
    }
    default:
      return state
  }
}
