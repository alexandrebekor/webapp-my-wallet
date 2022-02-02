import { useParams } from "react-router-dom"

const Teste = () => {
  let params = useParams()
  return <h1>{params.date}</h1>
}

export default Teste