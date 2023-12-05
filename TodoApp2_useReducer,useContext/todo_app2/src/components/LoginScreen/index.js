import { Input, Button, VStack, Heading, FormControl, FormLabel, Center } from "@chakra-ui/react";
import { useState, useContext } from "react";
import AuthContext, { ACTIONS } from '../AuthContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './style.css'
import CustomInput from "../CustomInput"
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

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
    console.log(values);
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
          {({ isSubmitting }) => (
            <Form>

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
              <button disabled={isSubmitting} style={{ "background-color": " hsl(207, 73%, 57%)" }} type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </VStack>
    </Center>


  );
};

export default LoginScreen;
