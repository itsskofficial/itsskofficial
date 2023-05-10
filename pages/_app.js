import '@styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return <Component {...pageProps} />
}
