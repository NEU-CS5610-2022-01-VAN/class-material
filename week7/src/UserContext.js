import React, { useContext, useState, useEffect } from "react";
import { GITHUB_API_URL } from "./constants";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
