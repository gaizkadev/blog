import '../styles/index.css'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
}
