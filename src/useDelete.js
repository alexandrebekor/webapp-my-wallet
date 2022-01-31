import axios from "axios"
import { useReducer } from "react"

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

const useDelete = () => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {}
  })

  const destroy = url => {
    dispatch({type: 'REQUEST'})
    axios
      .delete(url)
      .then(() => {
        dispatch({ type: 'SUCCESS' })
      })
  }

  return [data, destroy]
}

export default useDelete