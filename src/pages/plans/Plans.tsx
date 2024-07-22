import { usePlanByIdQuery } from "../../hooks/usePlanByIdQuery";
import { useParams, Link } from "react-router-dom";

const Plans = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { data, isLoading } = usePlanByIdQuery(id);
  console.log(data);

  if(isLoading) {
    return <div>Chargement...</div>
  }

    return (
        <div>
             <Link to="/">Back</Link>
            <h1>{ data?.title }</h1>
        </div>
    );
}

export { Plans }
