import { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return <UserContext value={user}>{children}</UserContext>;
}
