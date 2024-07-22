import { useSupabase } from "./useSupabase";
import { useQuery } from "@tanstack/react-query";
import { getByIdPlan } from "../queries/getByIdPlan";

function usePlanByIdQuery(id?: string) {
  const client = useSupabase();
  const queryKey = ['plans', id];

  const queryFn = () => {

    return getByIdPlan(client, id ?? "unknow").then(
      (result) => result.data
    );
  };

  return useQuery({ queryKey, queryFn, enabled: !!id });
}

export { usePlanByIdQuery }
