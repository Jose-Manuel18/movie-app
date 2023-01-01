import Navigation from "./Screens/Navigation/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { auth } from "./State/firebase";

const queryClient = new QueryClient();

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});
const authLink = setContext(async (_, { headers }) => {
  const token = await auth.currentUser?.getIdToken();
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}
