import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../features/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClientProvider,QueryClient} from "react-query"
import LayOut from '../components/LayOut';
import { useRouter } from 'next/router';
const client=new QueryClient()
function MyApp({ Component, pageProps }) {
  const noNav=["/"]
  const {asPath}=useRouter()

  return (
  <QueryClientProvider client={client}>

  <Provider store={store}>
    {noNav.includes(asPath)?
  


<Component {...pageProps} />

:
<LayOut>

<Component {...pageProps} />
</LayOut>
}
  </Provider>
  </QueryClientProvider>
  )
}

export default MyApp
