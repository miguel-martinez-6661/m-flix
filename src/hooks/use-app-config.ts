import { useEffect } from "react";
import { getHttpClient } from "../utils";

// This way we can initialize the app configuration in a single place
// without adding logic to the main component
export const useAppConfig = () => {
  useEffect(() => {
    getHttpClient();
  }, []);
};
