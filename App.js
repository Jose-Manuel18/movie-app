import "./assets/Windows Batch/ignoreWarnign";
import { StyleSheet } from "react-native";
import Navigation from "./Screens/Navigation";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {},
});
