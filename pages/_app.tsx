import '../styles/globals.css'
import React from 'react';
import { AppProps } from 'next/app';
import TopHeader from '../components/TopHeader';
import MenuBar from '../components/MenuBar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <TopHeader />
      <MenuBar />
      <Component {...pageProps} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </div>
  )
}

export default MyApp
