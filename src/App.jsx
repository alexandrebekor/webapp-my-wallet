import axios from "axios"
import useGet from "./useGet"
import usePost from "./usePost"

/**
 *  transactions {
 *    YYYY-MM {
 *      DD {
 *        id {
 *          value,
 *          description
 *        }
 *      }
 *    }
 *  }
 */

const url = `${import.meta.env.VITE_URL}/2022-01/31.json`

function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)

  const onSave = () => {
    post({value: 20, description: 'teste'})
  }

  return (
    <div>
      <h1>My Wallet</h1>
      { data.loading && <h2>Carregando</h2> }
      { JSON.stringify(data) }
      <button onClick={onSave}>Save</button>
      {JSON.stringify(postData)}
    </div>
  )
}

export default App
