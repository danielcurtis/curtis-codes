import type { AppProps } from 'next/app';
import Image from 'next/image';
import '98.css';
import '../global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bgImg">
        <Image
          alt="Clouds"
          src="/clouds.jpg"
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default App;
