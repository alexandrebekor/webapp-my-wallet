import { useGet, usePost, useDelete } from "./rest"

const BASE_URL = import.meta.env.VITE_URL

function App() {
  const data = useGet('2022-02')
  const [postData, post] = usePost('2022-02')
  const [destroyData, destroy] = useDelete()

  const handleSave = () => {
    post({value: 20, description: 'teste'})
  }

  const handleDelete = () => {
    destroy('2022-02')
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
