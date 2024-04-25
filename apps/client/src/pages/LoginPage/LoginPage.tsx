import { TextInput, View, Text, Button } from "react-native";
import { HeaderText, Wrapper } from "./styles";
import { Formik } from "formik";
import { CustomInput } from "./components/CustomInput";

type IFormValues = {
  email: string;
  password: string;
};

const INITIAL_VALUES: IFormValues = {
  email: "",
  password: "",
};

const validate = (values: IFormValues) => {
  const errors: Partial<IFormValues> = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export const LoginPage = () => {
  return (
    <Wrapper>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values) => console.log(values)}
        validate={validate}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <View>
              <HeaderText>Login</HeaderText>
              <CustomInput name="email" placeholder="Email" />
              <CustomInput
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Button title="Submit" onPress={() => handleSubmit()}></Button>
            </View>
          );
        }}
      </Formik>
    </Wrapper>
  );
};
