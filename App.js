import "./assets/Windows Batch/ignoreWarnign";
import { StyleSheet } from "react-native";
import Navigation from "./Screens/Navigation";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
