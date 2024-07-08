import { useMemo } from "react";
import { getSupabaseClient } from "../lib/getSupabaseClient";

export const useSupabase = () => {
    return useMemo(getSupabaseClient, []);
}
