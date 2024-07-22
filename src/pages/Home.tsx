import { usePlanListQuery } from '../hooks/usePlanListQuery';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const {
    data: plans,
    isLoading,
    isError
  } = usePlanListQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const handlePlanClick = (planId: string) => {
    navigate(`/plans/${planId}`)
  }

  return (
    <div>
      <h1>Plan de trésorie</h1>
      <Link to="/plans/new">Créer un nouveau plan</Link>
      <ul>
      {
        (plans ?? []).map((plan) => (
          <li key={plan.id} onClick={() => handlePlanClick(plan.id)} onKeyUp={() => handlePlanClick(plan.id)} >
            <h2>{plan.title}</h2>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export { Home}
