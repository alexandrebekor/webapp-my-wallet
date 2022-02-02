import axios from "axios"
import { useEffect, useReducer } from "react"

const BASE_URL = import.meta.env.VITE_URL

const INITIAL_STATE = {
  loading: true,
  data: {}
}

const reducer = (state, action) => {
  if(action.type === 'REQUEST') {
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === 'SUCCESS') {
    return {
      ...state,
      loading: false,
      data: action.data
    }
  }
  return state
}

const useGet = resource => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    axios
      .get(`${BASE_URL}/${resource}.json`)
      .then(response => {
        dispatch({ type: 'SUCCESS', data: response.data })
      })
  }, [])

  return data
}

const usePost = resource => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE)

  const post = data => {
    dispatch({type: 'REQUEST'})
    axios
      .post(`${BASE_URL}/${resource}.json`, data)
      .then(response => {
        dispatch({ type: 'SUCCESS', data: response.data })
      })
  }

  return [data, post]
}

const useDelete = () => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE)

  const destroy = resource => {
    dispatch({type: 'REQUEST'})
    axios
      .delete(`${BASE_URL}/${resource}.json`)
      .then(() => {
        dispatch({ type: 'SUCCESS' })
      })
  }

  return [data, destroy]
}

export { useGet, usePost, useDelete }