import { use } from "react";
import UserContext from "../contexts/UserContext";

export default function useUser() {
  const context = use(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
}
