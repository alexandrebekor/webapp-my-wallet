import { Link } from 'react-router-dom'
import { useGet, usePost, useDelete } from '../../utils/rest'

const Home = () => {
  const results = useGet('report')
  const [postData, post] = usePost('2022-02')
  const [destroyData, destroy] = useDelete()

  const handleSave = () => {
    post({ value: 20, description: 'teste' })
  }

  const handleDelete = () => {
    destroy('2022-02')
  }

  return (
    <div>
      <h1>My Wallet</h1>
      <label>Ano</label>
      <select>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <label>Mês</label>
      <select>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      {results.loading && <h2>Carregando</h2>}
      {!results.loading && (
        <div>
          <p>Tabela</p>
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Previsão de Entrada</th>
                <th>Previsão de Saída</th>
                <th>Entrada</th>
                <th>Saída</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(results.data).map(item => {
                return (
                  <tr key={item}>
                    <td>
                      <Link to={`/mes/${item}`}>{item}</Link>
                    </td>
                    <td>{results.data[item].input_prevision}</td>
                    <td>{results.data[item].output_prevision}</td>
                    <td>{results.data[item].input}</td>
                    <td>{results.data[item].output}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Home
