import { Input, Button, VStack, Heading, FormControl, Text, Center, ButtonGroup } from "@chakra-ui/react";
import { useState, useContext } from "react";
import AuthContext, { ACTIONS } from '../AuthContext';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import './style.css'
import CustomInput from "../CustomInput"
import * as authApi from "../../apis/authApi";
const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const LoginScreen = () => {
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {

    actions.resetForm()
    console.log(values);
    const result = await authApi.login(values);
    console.log(result.Error);
    if (result.Error) {
      console.log(result);
      setError(result.Error)

    }
    if (result.data.success) {
      dispatch({ type: ACTIONS.LOGIN })
      console.log(state.isAuth);
      navigate("/home");

    }

  }

  return (
    <Center>
      <VStack>
        <Heading>
          Login
        </Heading>
        <Formik
          initialValues={{
            username: '',
            password: '',

          }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {({ props }) => (
            <VStack
              as={Form}

            >
              <Text as="p" color="red.500">{error}</Text>
              <CustomInput
                name="username"
                label="Username"
                placeholder="Enter your username"
                type="text"
              />

              <CustomInput
                name="password"
                label="Password"
                placeholder="Enter your Password"
                type="password"
              />
              <ButtonGroup pt="1rem">
                <Button colorScheme="teal" type="submit">LOG IN</Button>
              </ButtonGroup>
            </VStack>
          )}
        </Formik>
      </VStack>
    </Center>


  );
};

export default LoginScreen;
