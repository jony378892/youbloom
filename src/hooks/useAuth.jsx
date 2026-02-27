import { use } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

export default function useAuth() {
  const authContext = use(AuthContext);

  return authContext;
}
