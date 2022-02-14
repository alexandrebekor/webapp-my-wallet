import axios from 'axios'
import { useEffect, useReducer } from 'react'

const BASE_URL = import.meta.env.VITE_URL

const INITIAL_STATE = {
  loading: true,
  data: {}
}

const reducer = (state, action) => {
  if (action.type === 'REQUEST') {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === 'SUCCESS') {
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
  const reloadPage = async () => {
    dispatch({ type: 'REQUEST' })
    const response = await axios.get(`${BASE_URL}/${resource}.json`)
    dispatch({ type: 'SUCCESS', data: response.data })
  }

  useEffect(() => {
    reloadPage()
  }, [resource])

  return { ...data, refetch: reloadPage }
}

const usePost = resource => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE)

  const post = async data => {
    dispatch({ type: 'REQUEST' })
    const response = await axios.post(`${BASE_URL}/${resource}.json`, data)
    dispatch({ type: 'SUCCESS', data: response.data })
  }

  return [data, post]
}

const useDelete = () => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE)

  const destroy = async resource => {
    dispatch({ type: 'REQUEST' })
    await axios.delete(`${BASE_URL}/${resource}.json`)
    dispatch({ type: 'SUCCESS' })
  }

  return [data, destroy]
}

export { useGet, usePost, useDelete }
