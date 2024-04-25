import { theme } from "@/styles";
import { StyleSheet, TextInput } from "react-native";

export const StyledInput = ({ style = {}, error = "", ...props }) => {
  const inputStyle = [styles.input, style, error && styles.error];
  
  return <TextInput style={inputStyle} {...props}></TextInput>;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 8,
    marginVertical: 8,
    width: "100%",
    borderRadius: 4,
    fontSize: 16,
  },
  error: {
    borderColor: theme.colors.error,
  },
});
