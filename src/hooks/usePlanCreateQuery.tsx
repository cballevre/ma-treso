import { useSupabase } from "./useSupabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlan } from "../queries/createPlan";


function usePlanCreateQuery() {
  const client = useSupabase();
  const queryClient = useQueryClient()

  const createPlanFn = async (data: {
    title: string;
  }) => {
    return createPlan(client, data).then(
      (result) => result.data
    );
  }

  return useMutation({
    mutationFn: createPlanFn,
  onSuccess: (data) => {
    console.log(data)
    if(data) {
      queryClient.setQueryData(['plans', data.id], data)
    }

  },
  })
}

export { usePlanCreateQuery }
