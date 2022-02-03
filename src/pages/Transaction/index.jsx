import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGet } from "../../utils/rest"

const Transaction = () => {
  const { date } = useParams()
  const results = useGet(`transactions/${date}`)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Feito?</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(results.data).map(item => {
            return (
              <tr key={ item }>
                <td>{ results.data[item].day }</td>
                <td>{ results.data[item].description }</td>
                <td>{ results.data[item].value }</td>
                <td>
                  { results.data[item].done && <input type="checkbox" checked /> }
                  { !results.data[item].done && <input type="checkbox" /> }
                </td>
              </tr>
            )
          }) }
        </tbody>
      </table>
    </div>
  )
}

export default Transaction