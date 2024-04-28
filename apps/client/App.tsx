import Main from "./src/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </QueryClientProvider>
  );
}
