import type { AppProps } from 'next/app';
import React from 'react';
import 'src/styles/global.css';
import 'src/styles/fontFace.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
