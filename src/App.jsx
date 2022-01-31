import useGet from "./useGet"

// axios.get('https://api-my-wallet-default-rtdb.firebaseio.com/Address.json')
//   .then(response => console.log(response))

// axios.post('https://api-my-wallet-default-rtdb.firebaseio.com/Address.json', {
//   teste: 'Alexandre'
// })

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

const url = import.meta.env.VITE_URL

// const env = import.meta.env.VITE_URL

function App() {
  const data = useGet(url)
  // console.log(env)
  return (
    <div>
      <h1>My Wallet</h1>
      { data.loading && <h2>Carregando</h2> }
      { JSON.stringify(data) }
    </div>
  )
}

export default App
