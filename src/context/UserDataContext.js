import { createContext, useState } from "react";
import { useHistory } from "react-router";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataProvider };
