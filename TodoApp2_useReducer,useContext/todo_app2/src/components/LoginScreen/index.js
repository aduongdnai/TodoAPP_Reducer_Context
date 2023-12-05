import { Input, Button, VStack, Heading, FormControl, FormLabel, Center } from "@chakra-ui/react";
import { useState,useContext } from "react";
import AuthContext,{ACTIONS} from '../AuthContext';
const LoginScreen = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with:", { username, password });
    dispatch({ type: ACTIONS.LOGIN, payload: {} });
  };

  return (
    <Center>
    <VStack >
      <Heading>Login</Heading>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </VStack>
    </Center>
  );
};

export default LoginScreen;
