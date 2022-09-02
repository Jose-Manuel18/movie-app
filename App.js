import "./assets/Windows Batch/ignoreWarnign";
import { SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./Screens/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();
console.reportErrorsAsExceptions = false;
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
