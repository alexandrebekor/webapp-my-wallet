import { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

const AddMonth = () => {
  const refYear = useRef()
  const refMonth = useRef()
  const [date, setDate] = useState('')

  const addMonth = () => {
    setDate(`${refYear.current.value}-${refMonth.current.value}`)
  }

  if (date !== '') {
    return <Navigate to={`/mes/${date}`} replace={true} />
  }

  return (
    <div>
      <label>Ano</label>
      <select ref={refYear}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <label>Mês</label>
      <select ref={refMonth}>
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
      <button onClick={addMonth}>Novo Mês</button>
    </div>
  )
}

export default AddMonth
