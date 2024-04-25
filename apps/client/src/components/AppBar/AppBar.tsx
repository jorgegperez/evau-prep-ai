import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Link } from "react-router-native";

import { theme } from "../../styles";
import { StyledLink } from "../StyledLink";

export const AppBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StyledLink to="/">
          <Text style={styles.text}>EBAU X</Text>
        </StyledLink>
        <StyledLink to="/login">
          <Text>Login</Text>
        </StyledLink>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>22</Text>
          <Text style={styles.pointsText}>⭐️</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingBottom: 10,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontSize: theme.fontSizes.header,
    color: theme.colors.textSecondary,
  },
  pointsContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    padding: 6,
    borderRadius: 4,
  },
  pointsText: {
    color: theme.colors.textSecondary,
    fontWeight: theme.fontWeights.bold,
  },
});
