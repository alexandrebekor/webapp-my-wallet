import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDelete, useGet, usePost } from '../../utils/rest'

const Transaction = () => {
  const { date } = useParams()
  const results = useGet(`transactions/${date}`)
  const [dataPost, post] = usePost(`transactions/${date}`)
  const [dataDestroy, destroy] = useDelete()
  const [form, setForm] = useState({
    day: '',
    description: '',
    price: ''
  })

  const changeForm = event => {
    const value = event.target.value
    const key = event.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  const handleSave = async () => {
    const price = form.price
    if (!isNaN(price) && price.search(/^[-]?\d+(\.)?\d+?$/) >= 0) {
      await post({
        day: form.day,
        description: form.description,
        price: parseFloat(price)
      })
      results.refetch()
      setForm({
        day: '',
        description: '',
        price: ''
      })
    }
  }

  const handleDestroy = async id => {
    await destroy(`transactions/${date}/${id}`)
    results.refetch()
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(results.data).map(item => {
            return (
              <tr key={item}>
                <td>{results.data[item].day}</td>
                <td>{results.data[item].description}</td>
                <td>{results.data[item].price}</td>
                <td>
                  <button onClick={() => handleDestroy(item)}>Remove</button>
                </td>
              </tr>
            )
          })}
          <tr>
            <td>
              <input
                name="day"
                type="text"
                value={form.day}
                onChange={changeForm}
              />
            </td>
            <td>
              <input
                name="description"
                type="text"
                value={form.description}
                onChange={changeForm}
              />
            </td>
            <td>
              <input
                name="price"
                type="text"
                value={form.price}
                onChange={changeForm}
              />
            </td>
            <td>
              <button onClick={handleSave}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
