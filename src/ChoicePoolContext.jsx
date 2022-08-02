import { createContext } from "react";

const ChoicePoolContext = createContext();

export function ChoicePoolImagesProvider({ children, value }) {
  return (
    <ChoicePoolContext.Provider value={value}>
      {children}
    </ChoicePoolContext.Provider>
  );
}

export default ChoicePoolContext;
