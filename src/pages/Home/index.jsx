import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AddMonth from '../../components/Form/AddMonth'
import { useGet } from '../../utils/rest'

const Home = () => {
  const results = useGet('/report.json')

  return (
    <div>
      <h1>My Wallet</h1>
      <AddMonth />
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
              {results.data &&
                Object.keys(results.data).map(item => {
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
