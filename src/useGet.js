import axios from "axios"
import { useReducer, useEffect } from "react"

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

const useGet = url => {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {}
  })

  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    axios
      .get(url)
      .then(response => {
        dispatch({ type: 'SUCCESS', data: response.data })
      })
  }, [])

  return data
}

export default useGet