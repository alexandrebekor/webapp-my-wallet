import axios from "axios"
import useDelete from "./useDelete"
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
  const [destroyData, destroy] = useDelete()

  const handleSave = () => {
    post({value: 20, description: 'teste'})
  }

  const handleDelete = () => {
    destroy('https://api-my-wallet-default-rtdb.firebaseio.com/transactions/2022-01/31/-MumFaVv-RtV2NyRJ7li.json')
  }

  return (
    <div>
      <h1>My Wallet</h1>
      { data.loading && <h2>Carregando</h2> }
      { JSON.stringify(data) }
      <button onClick={handleSave}>Save</button>
      { JSON.stringify(postData) }
      <button onClick={handleDelete}>Delete</button>
      { JSON.stringify(destroyData) }
    </div>
  )
}

export default App
