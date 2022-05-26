import React from "react";
import { State } from "../types";
import { statuses } from "../statuses";

const AppContext = React.createContext<State>({
  status: statuses.COMPLETED,
});
export const AppProvider = AppContext.Provider;
export default AppContext;
