import { useContext } from "react";
import { AllStateContext } from "./ContextProvider";

const useAuth = () => {
    return useContext(AllStateContext);
}
export default useAuth;