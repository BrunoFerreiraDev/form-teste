import { StateProvider } from '../stateContext'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
