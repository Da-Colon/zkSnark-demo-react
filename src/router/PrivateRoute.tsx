import { Navigate } from "react-router-dom";
import { useStoreSelector } from "../providers/store/hooks";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { address, isLoaded } = useStoreSelector((state) => state.account);

  if (!address && isLoaded) {
    return <Navigate to="/" />;
  }

  return children;
};