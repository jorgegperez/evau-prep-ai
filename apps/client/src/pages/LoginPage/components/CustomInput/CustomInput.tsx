import { StyledInput } from "@/components";
import { useField } from "formik";
import { StyledText } from "./CustomInput.styles";

export const CustomInput = ({ name = "", ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledInput
        value={field.value}
        error={meta.error}
        onChangeText={(value: string) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && meta.touched && <StyledText>{meta.error}</StyledText>}
    </>
  );
};
