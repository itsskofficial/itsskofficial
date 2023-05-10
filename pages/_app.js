import '@styles/globals.css'



export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return <Component {...pageProps} />
}
