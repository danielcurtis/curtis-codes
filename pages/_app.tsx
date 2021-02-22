import type { AppProps } from 'next/app';
import '98.css';
import '../global.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
