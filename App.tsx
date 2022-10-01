import './assets/Windows Batch/ignoreWarnign'
import Navigation from './Screens/Navigation/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { ScrollView, StatusBar } from 'react-native'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
const queryClient = new QueryClient()
export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Navigation />
        </SafeAreaProvider>
        {/* <StatusBar animated={true} barStyle='default' /> */}
      </QueryClientProvider>
    </RecoilRoot>
  )
}
