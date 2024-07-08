import { useSupabase } from "./useSupabase";
import { useQuery } from "@tanstack/react-query";
import { findAllPlans } from "../queries/findAllPlans";

function usePlanListQuery() {
  const client = useSupabase();
  const queryKey = ['plans'];

  const queryFn = () => {

    return findAllPlans(client).then(
      (result) => result.data
    );
  };

  return useQuery({ queryKey, queryFn });
}

export { usePlanListQuery }
