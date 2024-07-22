import { FC } from "react"
import { usePlanCreateQuery } from "../../hooks/usePlanCreateQuery"
import { Link, useNavigate } from "react-router-dom"

const CreatePlan: FC = () => {
  const navigate = useNavigate()
  const { mutate } = usePlanCreateQuery()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutate({
      title: event.currentTarget.title.value
    })
    navigate('/')
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Créer un plan de trésorie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
        </div>
        <button type="submit">Créer</button>
      </form>
    </div>
  )
}

export { CreatePlan }
