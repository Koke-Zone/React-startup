import { createContext } from "react";

const UserContext = createContext({
        loggedUser: "Default Value",
    });

export default UserContext;