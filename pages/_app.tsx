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
    </div>
  )
}

export default MyApp
