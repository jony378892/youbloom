import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = { user, setUser, handleLogout };

  return <AuthContext value={value}>{children}</AuthContext>;
}
