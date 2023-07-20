import { Flex } from "@chakra-ui/react";
import { useStoreSelector } from "../providers/store/hooks";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const isLoggedIn = useStoreSelector((state) => !!state.account.id && !!state.account.isLoaded);
  const navigate = useNavigate();

  
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" h="calc(100% - 6rem)" gap={8}>
     
    </Flex>
  );
}