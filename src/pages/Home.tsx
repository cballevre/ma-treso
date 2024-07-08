import { usePlanListQuery } from '../hooks/usePlanListQuery';

const Home = () => {
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

  return (
    <div>
      <h1>Plan de trésorie</h1>
      {
        (plans ?? []).map((plan) => (
          <div key={plan.id}>
            <h2>{plan.title}</h2>
          </div>
        ))
      }
    </div>
  );
}

export { Home}
